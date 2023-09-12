from PIL import Image

# Loop para processar todas as imagens de 1 a 200
for numero_imagem in range(1, 201):
    # Nome da imagem de entrada (JPEG)
    nome_imagem_jpg = f'midia/backgroundFrame_{numero_imagem}.jpg'
    
    # Nome da imagem de saída (PNG)
    nome_imagem_png = f'midia/backgroundFrame_{numero_imagem}.png'
    
    # Abra a imagem JPEG
    imagem_jpg = Image.open(nome_imagem_jpg)
    
    # Salve a imagem como PNG
    imagem_jpg.save(nome_imagem_png, 'PNG')
