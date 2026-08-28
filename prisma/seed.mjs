import { PrismaClient } from '@prisma/client';
const prisma=new PrismaClient();
await prisma.category.createMany({data:[{name:'Water Tank Guides',slug:'water-tank-guides',type:'POST',sortOrder:10},{name:'Stainless Steel Water Tanks',slug:'stainless-steel-water-tanks',type:'PRODUCT',sortOrder:10}],skipDuplicates:true});
await prisma.$disconnect();
