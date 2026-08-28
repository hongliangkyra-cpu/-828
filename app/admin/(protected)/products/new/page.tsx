import{prisma}from'@/lib/prisma';import ProductForm from'../../../product-form';
export default async function NewProduct(){const categories=await prisma.category.findMany({where:{type:'PRODUCT'},select:{id:true,name:true},orderBy:{sortOrder:'asc'}});return <><header className="admin-page-head"><div><span>CATALOG</span><h1>New product</h1></div></header><ProductForm categories={categories}/></>}
