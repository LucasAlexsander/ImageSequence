import cv2;

# Abra o vídeo
video_capture = cv2.VideoCapture('backgroundVideo.mp4')

# Verifique se o vídeo foi aberto com sucesso
if not video_capture.isOpened():
    print("Erro ao abrir o vídeo")
    exit()

# Loop para capturar todos os frames
frame_count = 1
while True:
    # Capture o próximo frame
    ret, frame = video_capture.read()
    
    # Verifique se o vídeo terminou
    if not ret:
        break
    
    # Salve o frame em um arquivo ou processe-o de acordo com sua necessidade
    cv2.imwrite(f'midia/backgroundFrame_{frame_count}.jpg', frame)
    
    frame_count += 1

# Libere o objeto de captura e feche o vídeo
video_capture.release()
cv2.destroyAllWindows()
