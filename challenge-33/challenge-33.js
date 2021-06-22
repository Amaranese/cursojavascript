/*
Es hora de terminar nuestro proyecto.

Ya tenemos el registro funcionando y persistiendo en la memoria;
Ya estamos borrando el coche de la tabla (en el frontend).

Pero si te fijas, si recargas la pantalla, el coche seguirá estando ahí.
Ahora hay que hacer que cuando se pulse el botón de borrar, el coche sea
se eliminará de la tabla y también se borrará del servidor.

Para ello es necesario enviar el verbo HTTP "DELETE" a la misma URL
que hiciste el POST para registrar el coche:
`http://localhost:3000/car`, sólo que en lugar de enviar toda la información
información, como lo hace para el registro, debe enviar sólo la matrícula
del coche.

Al hacer esto, cuando recargues la pantalla, la tabla debería mostrar los coches actualizados.

La lógica del servidor que se crea en este directorio de retos es la misma
desafío anterior, con la diferencia de que en este desafío tenemos
aplicación de la regla de eliminación de coches =)

La regla es la misma que las anteriores: crear una rama `reto-33` en su
y envíe el pull request allí.

Luego, envía un pull request al repositorio del curso, poniendo en la consola.log
debajo de la URL del pull request en su repositorio.
*/
console.log('Enlace desde el pull request de tu proyecto');