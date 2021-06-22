/*
Ya tenemos la funcionalidad de añadir y eliminar un coche. Ahora, vamos a persistir en estos datos, 
guardándolo temporalmente en la memoria de un servidor.

En ese directorio `challenge-32` hay una carpeta `server`. Es un simple servidor NodeJS 
que podemos utilizar para guardar la información de nuestros coches.

Para utilizarlo, tendrás que hacer lo siguiente:

- A través del terminal, acceda al directorio `server`;
- ejecutar el comando `npm install` para instalar las dependencias;
- ejecuta `node app.js` para iniciar el servidor.

Se ejecutará en el puerto 3000, al que se puede acceder a través de un navegador en: 
`http://localhost:3000`

Tu proyecto no tiene que estar funcionando en el servidor. Puede estar en otro puerto.
Los cambios que tendrás que hacer en tu proyecto son:

- Para listar los coches registrados al cargar su proyecto, haga una petición GET a la dirección
`http://localhost:3000/car`.
- Para matricular un coche nuevo, haga un POST a la dirección `http://localhost:3000/car`, enviando
los siguientes campos:
  - `image`, con la URL de la imagen del coche;
  - `marcaModelo`, con la marca y el modelo del coche;
  - `year`, con el año del coche;
  - `plate`, con la matrícula del coche;
  - color", con el color del coche.

Después de enviar el POST, haz un GET al `servidor` y actualiza la tabla para mostrar el nuevo coche.

Crea una rama `challenge-32` en tu proyecto, envía un pull request allí y pega en ese archivo la URL
de la solicitud de extracción.
*/
console.log('Enlace desde el pull request de tu proyecto');
