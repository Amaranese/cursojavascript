/*
Envuelve todo el contenido de este reto en un IIFE.
2. Añade la directiva 'use strict';
3. Pasa los objetos ventana y documento como parámetros a la IIFE.
4. Esta vez no es necesario crear HTML. Ya existe, y utilizaremos
el marcado creado en él para hacer nuestro reto ;)

El HTML NO puede cambiarse.
*/

/*
Al cargar la página, pregunte al usuario "¿Cuál es su nombre?". Asignar el
a una variable llamada `nombre de usuario`. Si el usuario no introduce un
nombre, `nombre de usuario` debe ser establecido como "Desconocido".
Con la respuesta, muestra una alerta con el mensaje "¡Bienvenido [USERNAME]!"
*/
// ?

/*
Ahora, pregunta al usuario "¿Cuál es tu correo electrónico?", asignando el resultado a
una variable llamada `email`.
*/
// ?

/*
- Seleccione la entrada "Nombre", asignándola a una variable llamada
`$inputUsername`.
*/
// ?

/*
- Seleccione la entrada "Email", asignándola a una variable llamada
`$inputEmail`.
*/
// ?

/*
- Seleccione el campo "Mensaje", asignándolo a una variable llamada
`$mensaje`.
*/
// ?

/*
- Selecciona el botón de envío del formulario, asignándolo a una variable
variable llamada `$button`.
*/
// ?

/*
Rellene los campos "Nombre" y "Correo electrónico" del documento con los valores
introducido por el usuario.
*/
// ?

/*
Añade un receptor de eventos de clic al botón que haga lo siguiente:
1. Compruebe si todos los campos están rellenados:
- Mostrar una alerta para cada campo no rellenado, como se indica a continuación:
- Si el campo "Nombre" no está rellenado, mostrar:
    - "¡Rellena el nombre de usuario!"
- Si el campo "Correo electrónico" no está rellenado, mostrar:
    - "¡Rellena el correo electrónico!"
- Si el campo "Mensaje" no está rellenado, mostrar:
    - "¡Rellena el mensaje!"
- Si el campo "Correo electrónico" no es válido, se mostrará:
    - "¡Introduce una dirección de correo electrónico válida!"

2. Para comprobar si el correo electrónico es válido utilice la función `isValidEmail`, pasando
la dirección de correo electrónico que se introdujo en el campo "Correo electrónico" como parámetro. (El
La función `isValidEmail` se creará más adelante).

3. Si todo está bien, pregunta al usuario:
    - "¿Está seguro de que quiere enviar el formulario?"
Si se confirma, muestra una alerta con el mensaje:
    - "¡Enviado con éxito!"
En caso contrario, muestra una alerta con el mensaje:
    - "No se envía".
*/
// ?

/*
Crear una función llamada `isValidEmail` que se utilizará para validar el
presentación de formularios.
Esta función debe tomar un correo electrónico como parámetro y comprobar que es un
correo electrónico.
Las reglas de validación son:
    - El nombre de usuario (antes de la atroba), puede ser cualquier carácter
    carácter alfanumérico, incluido el guión bajo, el signo "+" y el punto;
    - Después de la "arroba", el dominio sólo puede contener caracteres alfanuméricos
    y el guión bajo;
    - Para la extensión, el dominio debe ir seguido de un punto, y al menos
    2 caracteres alfanuméricos;
    - El final del dominio es opcional, pero si existe, debe comenzar con un punto
    punto, seguido de un máximo de 2 caracteres alfanuméricos.

Algunos correos electrónicos válidos que se pueden utilizar para hacer pruebas:
    - "mi.email+categoria@gmail.com"
    - "juca_malandro@bol.com.br"
    - "pedrobala@hotmail.uy"
    - "sandro@culinaria.dahora"

Algunos correos electrónicos no válidos:
    - "walter-da-silva@maraca.br"
    - "rita-marica@titica.a.b"
    - "agua_@evida.br.com"
*/
// ?
