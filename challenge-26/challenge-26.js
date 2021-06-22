/*
El reto de esta semana consiste en crear una minibiblioteca para
¡reutilizar nuestro código al hacer la manipulación del DOM!

Requisitos:
- El nombre de la lib debe ser "DOM".
- Debe ser una función constructora, que recibirá una cadena como parámetro.
Esta cadena será el nodo DOM a seleccionar;
- En el constructor, debe asignar a `this.element` todos los
elementos del DOM al `this.element`;
- Extiende la librería para que tenga los métodos `on`, `off` y `get`.
- El método `on` añadirá un oyente de eventos a todos los
elementos.
- El método `off` eliminará el oyente de eventos de todos los
elementos.
- El método `get` debe devolver los elementos.
- El código que se muestra a continuación debería funcionar correctamente una vez creada la librería.

Sugerencia: observe los errores que se producen en la consola, y trabaje con ellos uno por uno.
Sólo pasa al siguiente problema cuando haya resuelto el anterior :)
*/
// ?

var $a = new DOM('[data-js="link"]');
$a.on('click', function(e) {
  e.preventDefault();
  console.log('clicked');
});

console.log('Elementos seleccionados:', $a.get());
console.log('¿$a es hijo de body?', $a.get()[0].parentNode == document.body);
