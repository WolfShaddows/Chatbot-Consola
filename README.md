# Chatbot con OpenAI-consola
### Proyecto
###### Tipo de Chatbot: *Un chatbot especializado en temas generales.*
###### Interactividad: *Respuestas elaboradas.*
###### Modo de Funcionamiento: *GPT se encarga de responder.*
###### Plataforma de Implementación: *Script de consola.*


------------


###   Lenguaje de Programación
Haremos el chatbot en JavaScript, específicamente en Node.js, ya que es adecuado para scripts de consola y también porque es compatible con la interfaz de OpenAI GPT-3.


------------


###   Herramientas Necesarias
`Node.js:` Asegúrate de tener Node.js instalado. (puedes descargarlo desde: https://nodejs.org/en).
`Editor de Código:` Puedes utilizar Visual Studio Code, Sublime Text, Atom o cualquier editor de tu preferencia (en este ejemplo se utilizo Visual Studio Code).
`Cuenta de OpenAI GPT-3:` Necesitarás una cuenta en OpenAI para obtener las credenciales de la API. Si no tienes una cuenta, puedes registrarte en OpenAI.


------------


###   Estructura del Proyecto
Creemos un proyecto simple con la siguiente estructura:
###### - /chatbot
> ######   - index.js
> ######   - package.json


------------


###   Configuración del Proyecto
Primero, crea un nuevo directorio para el proyecto y navega a él desde la línea de comandos:

>   mkdir chatbot

>   cd chatbot

Luego, inicializa tu proyecto Node.js ejecutando:

  `npm init -y //Esto creará un archivo package.json básico.`


------------


###   Instalación de Dependencias
Vamos a instalar las dependencias necesarias:
 `npm install openai axios readline`
     
	 -openai: Cliente para interactuar con la API de OpenAI GPT-3 (documentacion: https://platform.openai.com/docs/api-reference/introduction).
     -axios: Biblioteca para realizar solicitudes HTTP (documentacion: https://axios-http.com/es/docs/intro).
     -readline: Módulo de Node.js para leer líneas desde la entrada estándar (documentacion: https://nodejs.org/api/readline.html).


------------


###   Obtener la Clave de API de OpenAI
Asegúrate de reemplazar 'tu_clave_de_api_de_openai' con tu clave de API de OpenAI en el script (https://platform.openai.com/api-keys).


------------



###   Ejecutar el Chatbot
Desde la línea de comandos, ejecuta:
  `node index.js`

Ahora si, el chatbot estará esperando tus entradas y generará respuestas utilizando OpenAI GPT-3.


------------

###   Ejemplo de conversacion:

Usuario: ¿Cuál es el significado de la vida?
Chatbot: La pregunta sobre el significado de la vida es compleja y ha sido objeto de debate durante mucho tiempo. 
Algunas personas encuentran significado en relaciones, otras en logros personales. ¿Qué significado buscas tú?

Usuario: Cuéntame un chiste.
Chatbot: ¡Claro! Aquí tienes uno: ¿Por qué los programadores prefieren el café helado? Porque les gusta su código bien frío.


------------

### fin...
