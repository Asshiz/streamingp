import http
from rembg import remove 
from PIL import Image
utl = Image.open('imgfundo.jpg')
output = remove(
output.save('img1.png')