from PIL import Image

# Loop para processar todas as imagens de 1 a 200
for numero_imagem in range(1, 201):
    # Nome da imagem de entrada
    nome_imagem_entrada = f'midia/backgroundFrame_{numero_imagem}.png'
    
    # Carregue a imagem de entrada
    imagem = Image.open(nome_imagem_entrada)

    # Converta a imagem em RGBA para ter um canal alfa (transparência)
    imagem = imagem.convert('RGBA')

    # Defina um limiar de transparência para identificar o fundo (ajuste conforme necessário)
    limiar_transparencia = 200

    # Percorra todos os pixels da imagem e defina o canal alfa para 0 (totalmente transparente)
    # se a cor estiver próxima o suficiente do fundo (baseado no limiar de transparência)
    dados = imagem.getdata()
    nova_imagem = []
    for item in dados:
        # Verifique se o valor da luminância (R+G+B)/3 é menor que o limiar
        if sum(item[:3]) / 3 < limiar_transparencia:
            # Defina o canal alfa para 0 (transparente)
            nova_imagem.append((item[0], item[1], item[2], 0))
        else:
            nova_imagem.append(item)

    # Crie uma nova imagem com fundo transparente
    imagem_com_fundo_transparente = Image.new('RGBA', imagem.size)
    imagem_com_fundo_transparente.putdata(nova_imagem)

    # Salve a nova imagem com fundo transparente com o mesmo nome da imagem de entrada
    imagem_com_fundo_transparente.save(nome_imagem_entrada, 'PNG')
