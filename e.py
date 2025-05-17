from rembg import remove
from PIL import Image

# Cài đặt thư viện rembg trước: pip install rembg

input_path = 'photo-1521119989659-a83eee488004.png'      # Đường dẫn ảnh gốc
output_path = 'output.png'    # Đường dẫn lưu ảnh đã tách nền

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)