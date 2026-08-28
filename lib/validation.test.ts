import { describe, expect, it } from 'vitest';
import { categorySchema, postSchema } from './validation';

describe('CMS validation',()=>{
  it('rejects unsafe slugs',()=>expect(()=>categorySchema.parse({name:'Guides',slug:'Bad Slug!',description:'',type:'POST',sortOrder:0})).toThrow());
  it('accepts an article draft',()=>expect(postSchema.parse({title:'Water Tank Guide',slug:'water-tank-guide',excerpt:'',content:'<p>Content</p>',coverImage:'',coverImageAlt:'',categoryId:'cat_1',status:'DRAFT',authorName:'HONG LIANG',seoTitle:'',seoDescription:''}).status).toBe('DRAFT'));
});
