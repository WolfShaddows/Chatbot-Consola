// Importar la biblioteca axios para realizar solicitudes HTTP
const axios = require('axios');

// Importar la biblioteca readline para interactuar con la línea de comandos
const readline = require('readline');

// Definir la clave de la API de OpenAI (reemplazar con tu propia clave)
const OPENAI_API_KEY = 'agruegue su clave aqui';

// Crear una interfaz de lectura de línea para manejar la entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función asíncrona para enviar solicitudes a la API de OpenAI
async function enviarSolicitudOpenAI(prompt) {
    // Definir la URL de la API de OpenAI para completar texto con el motor Davinci Codex
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    // Configurar los encabezados de la solicitud, incluida la clave de API de OpenAI
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    // Definir los datos de la solicitud, incluido el texto de entrada y el número máximo de tokens
    const data = {
        prompt: prompt,
        max_tokens: 150
    };

    try {
        // Enviar una solicitud POST a la API de OpenAI usando axios
        const response = await axios.post(url, data, { headers });

        // Extraer y limpiar la respuesta para obtener el texto de la primera elección
        return response.data.choices[0].text.trim();
    } catch (error) {
        // Manejar errores, imprimir un mensaje y retornar una respuesta de error
        console.error('Error al comunicarse con OpenAI:', error.message);
        return 'Lo siento, ocurrió un error al procesar la solicitud.';
    }
}

// Función principal asíncrona que maneja la lógica del chatbot
async function main() {
    console.log('¡Bienvenido al Chatbot!');

    // Bucle principal que espera la entrada del usuario y proporciona respuestas del chatbot
    while (true) {
        // Esperar la entrada del usuario y almacenarla en la variable userMessage
        const userMessage = await preguntaUsuario('Tú: ');

        // Enviar la entrada del usuario a la función de solicitud de OpenAI y almacenar la respuesta
        const respuestaGPT = await enviarSolicitudOpenAI(userMessage);

        // Imprimir la respuesta del chatbot
        console.log(`Chatbot: ${respuestaGPT}`);
    }
}

// Función para hacer preguntas al usuario y devolver una promesa con la respuesta
function preguntaUsuario(prompt) {
    return new Promise((resolve) => {
        // Utilizar la interfaz readline para hacer preguntas al usuario
        rl.question(prompt, (respuesta) => {
            // Resolver la promesa con la respuesta del usuario
            resolve(respuesta);
        });
    });
}

// Llamar a la función principal para iniciar el chatbot
main();