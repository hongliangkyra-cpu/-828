from PIL import Image, ImageDraw
from pathlib import Path

root=Path(__file__).parent
top=Image.open(root/'qa-top.png').convert('RGB')
bottom=Image.open(root/'qa-bottom.png').convert('RGB')
page_h=3856; view_h=2400; overlap=view_h-(page_h-view_h)
stitched=Image.new('RGB',(top.width,page_h),'white')
stitched.paste(top,(0,0)); stitched.paste(bottom.crop((0,overlap,bottom.width,bottom.height)),(0,view_h))
stitched.save(root/'implementation-desktop.png',quality=92)
source=Image.open(root/'reference-homepage.png').convert('RGB')
w=520
source=source.resize((w,round(source.height*w/source.width)))
impl=stitched.resize((w,round(stitched.height*w/stitched.width)))
h=max(source.height,impl.height)+70
canvas=Image.new('RGB',(w*2+40,h),(235,239,244))
canvas.paste(source,(0,55)); canvas.paste(impl,(w+40,55))
d=ImageDraw.Draw(canvas); d.text((10,15),'SOURCE DESIGN',fill='black'); d.text((w+50,15),'BROWSER IMPLEMENTATION',fill='black')
canvas.save(root/'design-qa-comparison.jpg',quality=90)
print(source.size,impl.size,canvas.size)
