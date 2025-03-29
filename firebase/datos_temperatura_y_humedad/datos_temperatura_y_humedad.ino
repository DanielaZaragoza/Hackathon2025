#include <WiFi.h>
#include <FirebaseESP32.h>
#include <DHT.h>
/*Descomentar y agregar la red wifi y la contraseña 
//#define WIFI_SSID "Red_Wifi"
#define WIFI_PASSWORD "Contraseña"*/

// Configuración de Firebase
#define FIREBASE_HOST "proyecto-f9514-default-rtdb.firebaseio.com" // URL de tu base de datos
#define FIREBASE_AUTH "AIzaSyBJvGYVM4pH0uXt4Eu_nkqph7FhDn3BUGU" // Tu clave de autenticación



// Pines y configuración del sensor DHT11
#define DHTPIN 32
#define DHTTYPE DHT11
DHT dht11(DHTPIN, DHTTYPE);

// Objeto de Firebase
FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);

  // Conexión WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando a WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi conectado");

  // Conexión a Firebase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  // Inicializar el sensor DHT
  dht11.begin();
}

void loop() {
  // Leer temperatura y humedad
  float temperature = dht11.readTemperature();
  float humidity = dht11.readHumidity();

  // Mostrar en el monitor serie
  Serial.print("Temperatura: ");
  Serial.println(temperature);
  Serial.print("Humedad: ");
  Serial.println(humidity);

  // Enviar datos a Firebase
  if (Firebase.pushFloat(firebaseData, "/sensores/temperatura", temperature)) {
    Serial.println("Temperatura enviada a Firebase");
  } else {
    Serial.print("Error al enviar temperatura: ");
    Serial.println(firebaseData.errorReason());
  }

  if (Firebase.pushFloat(firebaseData, "/sensores/humedad", humidity)) {
    Serial.println("Humedad enviada a Firebase");
  } else {
    Serial.print("Error al enviar humedad: ");
    Serial.println(firebaseData.errorReason());
  }

  // Esperar antes de la siguiente lectura
  delay(5000);  // 5 segundos
}
