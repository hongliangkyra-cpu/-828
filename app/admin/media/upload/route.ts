import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { assertAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const allowed=new Set(['image/jpeg','image/png','image/webp']);const MAX=8*1024*1024;
export async function POST(req:NextRequest){try{await assertAdmin();const fd=await req.formData();const file=fd.get('file');if(!(file instanceof File)||!allowed.has(file.type)||file.size>MAX)return NextResponse.json({error:'Invalid image file.'},{status:400});const ext=file.type==='image/jpeg'?'jpg':file.type.split('/')[1];const name=`${Date.now()}-${crypto.randomUUID()}.${ext}`;let url:string;
if(process.env.NODE_ENV==='production'){const base=process.env.SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY,bucket=process.env.SUPABASE_STORAGE_BUCKET||'media',publicBase=process.env.NEXT_PUBLIC_MEDIA_BASE_URL;if(!base||!key||!publicBase)throw new Error('Production media storage is not configured.');const response=await fetch(`${base}/storage/v1/object/${bucket}/${name}`,{method:'POST',headers:{Authorization:`Bearer ${key}`,apikey:key,'Content-Type':file.type,'x-upsert':'false'},body:await file.arrayBuffer()});if(!response.ok)throw new Error('Storage upload failed.');url=`${publicBase.replace(/\/$/,'')}/${name}`;}else{const dir=path.join(process.cwd(),'public','uploads');await mkdir(dir,{recursive:true});await writeFile(path.join(dir,name),Buffer.from(await file.arrayBuffer()));url=`/uploads/${name}`;}
await prisma.media.create({data:{url,fileName:name,mimeType:file.type,size:file.size,alt:String(fd.get('alt')||'').slice(0,180)}});return NextResponse.redirect(new URL('/admin/media?ok=uploaded',req.url),303);}catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Upload failed.'},{status:500});}}
