import { prisma } from '@/lib/prisma'; import PostForm from '../../../post-form';
export default async function NewPost(){const categories=await prisma.category.findMany({where:{type:'POST'},select:{id:true,name:true},orderBy:{sortOrder:'asc'}});return <><header className="admin-page-head"><div><span>EDITORIAL</span><h1>New article</h1></div></header><PostForm categories={categories}/></>}
