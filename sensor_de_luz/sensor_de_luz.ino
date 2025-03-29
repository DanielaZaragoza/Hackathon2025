#include <DHT.h>

#define DHTPIN 32     // Pin digital donde está conectado el sensor
#define DHTTYPE DHT11    // Especifica que estamos usando un DHT11

int ldrPin = A0;  // Pin analógico donde está conectado el LDR
int ldrValue = 0;  // Variable para almacenar el valor leído
int ledPin = 2;  // El pin donde está conectado el LED
int fan = 7; 

DHT dht11(DHTPIN, DHT11);

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);  // Configura el pin como salida
  dht11.begin();
}

void loop() {
  ldrValue = analogRead(ldrPin);  // Lee el valor analógico
  float temperature = 0;
  float humidity = 0;

    
  humidity = dht11.readHumidity();
  temperature = dht11.readTemperature();

  Serial.print("Luz: ");
  Serial.println(ldrValue);  // Muestra el valor en el monitor serie

  if (ldrValue > 300)
  {
    digitalWrite(ledPin, HIGH);  // Enciende el LED
    Serial.println("encendido"); 

  }
  else
  {
     digitalWrite(ledPin, LOW);   // Apaga el LED
     Serial.println("apagado"); 
  }
  
    Serial.print("Temperatura: ");
    Serial.print(temperature);
    Serial.println(" °C");
    Serial.print("Humedad: ");
    Serial.print(humidity);
    Serial.println(" %");

  if (temperature > 25) {
        digitalWrite(fan, HIGH);  // Enciende el LED
        Serial.println("fan encendido");
      } else {
        digitalWrite(fan, LOW);   // Apaga el LED
        Serial.println("fan apagado");
      }
  delay(500);  // Espera medio segundo antes de la siguiente lectura
}