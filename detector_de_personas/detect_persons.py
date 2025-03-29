import cv2
from ultralytics import YOLO

# Cargar el modelo YOLO 
model = YOLO("yolov8n.pt")  

# Abrir la cámara web
cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: No se pudo acceder a la cámara.")
    exit()

while True:
    # Leer un fotograma de la cámara
    ret, frame = cap.read()
    if not ret:
        print("Error: No se pudo leer el fotograma.")
        break

    # Realizar la detección con YOLO
    results = model.predict(frame, conf=0.5)  

    person_count = 0

    for result in results[0].boxes.data:
        x1, y1, x2, y2, conf, cls = result
        if model.names[int(cls)] == "person":  
            person_count += 1  

            # Dibujar el rectángulo alrededor de la persona
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
            cv2.putText(frame, f"Person {conf:.2f}", (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    # Mostrar el número de personas detectadas en la ventana
    cv2.putText(frame, f"Person Count: {person_count}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Mostrar el fotograma anotado
    cv2.imshow("Detección de Personas", frame)

    # Salir al presionar 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
