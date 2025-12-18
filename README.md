# Sistema de Información Territorial

**sit.app** es un Sistema de Información Territorial web de información geográfica orientado a la visualización, consulta y gestión de capas geoespaciales en formato **GeoJSON**, utilizando **OpenLayers** como motor de mapas. El proyecto está orientado organismos públicos, municipios y comunas, consultoras, proyectos academicos y equipos técnicos. El sistema permite construir visores cartográficos modernos, responsivos y escalables, integrando datos geográficos provenientes de múltiples fuentes y facilitando su uso en procesos de gestión, planificación y análisis territorial.

---

## 🗺️ Funcionalidades principales

- Visualización de mapa base OpenStreetMap.
- Carga dinámica de capas vectoriales en formato GeoJSON.
- Panel de capas con activación y desactivación individual.
- Buscador de direcciones mediante Nominatim (OpenStreetMap).
- Marcador automático al realizar búsquedas.
- Popups informativos al hacer click sobre los objetos geográficos.
- Configuración de popups por capa (campos visibles y etiquetas).
- Interfaz tipo aplicación, con paneles laterales.
- Diseño responsive básico.

---

## 🧱 Tecnologías utilizadas

- Frontend: **HTML5, CSS3, JavaScript**
- Librería cartográfica: **OpenLayers**
- Datos: **GeoJSON, OpenStreeMap, IGN**
- Diseño UI: Layout tipo aplicación (paneles colapsables)

El proyecto no utiliza frameworks (React, Angular, Vue), lo que facilita su despliegue en entornos simples y servidores institucionales.

---

## 📁 Estructura del proyecto

```text

├── index.html              # Archivo principal del visor
├── layers/
│   ├── layers.json         # Definición de capas (archivo, nombre, descripción)
│   └── *.geojson           # Capas vectoriales
├── styles/
│   ├── *.js                # Estilos por capa (ej: msfd.js, msfpe.js, ecopuntos.js)
│   └── styles.js           # Registro de estilos / funciones auxiliares
└── popups/
    └── popups.js           # Configuración de popups por capa

```
---

🎨 Customización

Se puede customizar fácilmente:

- Identidad visual (colores, tipografías, logos)
- Títulos, textos y nombres del sistema
- Capas y estilos cartográficos
- Popups (campos visibles por capa)
- Mapas base disponibles
- Consumo de servicios WMS / WFS

---

## ▶️ Ejecución del proyecto en entorno local

### 1️⃣ Abrir una terminal (CMD / PowerShell)

### 2️⃣ Ir a la carpeta del proyecto

Ejemplo:

```bat
cd Desktop\sti.app
```

### 3️⃣ Levantar un servidor HTTP local

python -m http.server 8080

### 4️⃣ Abrir el visor en el navegador

http://localhost:8080 o http://localhost:8080/index.html

---

## 🧩 Agregar una nueva capa GeoJSON

1. Copiar el archivo .geojson dentro de la carpeta layers/.
2. Editar el archivo layers/layers.json y agregar una nueva entrada:

{
  "file": "nueva_capa.geojson",
  "name": "Nombre visible de la capa",
  "description": "Descripción breve de la capa"
}

3. (Opcional) Crear un archivo de estilo para la capa dentro de la carpeta styles/.
4. (Opcional) Registrar el estilo en el archivo de estilos correspondiente.
5. (Opcional) Configurar el popup de la capa en popups/popups.js.

Al recargar el visor, la nueva capa aparecerá automáticamente en el panel de capas.

---

## 💬 Popups de información

Los popups se configuran por capa mediante un archivo de configuración (popups/popups.js), permitiendo:
- Definir un título por capa.
- Seleccionar qué campos se muestran.
- Asignar etiquetas legibles a los atributos.
- Evitar la visualización de campos técnicos innecesarios.
- Esto permite mostrar información clara y relevante al usuario final.

---

## 📌 Estado del proyecto

🟡 En desarrollo activo
🧱 Base funcional estable
🚀 Preparado para ampliación y profesionalización

## 👤 Autor / Desarrollo

Ing. Agrim. Lucila L. Piedrabuena
www.linkedin.com/in/llpagrimensura

