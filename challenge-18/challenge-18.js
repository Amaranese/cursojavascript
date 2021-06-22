/*
Envuelve todo el contenido de este reto en un IIFE.
2. Añade la directiva 'use strict';
3. Cree un archivo index.html y añada este script a él.
*/

/*
Crear una función llamada `cleanCPF` que toma un CPF como parámetro, y
y devuelve un CPF limpio (sólo los números).
Usando los números de abajo, muestra en la consola que la limpieza funciona para todos ellos.
¡a ellos! Utilice un console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Clearing CPFs:' );
// ?

/*
Usando los CPFs limpiados arriba, déjelos con el formato correcto de CPF.
Por ejemplo: "999,999,999-99"
Muestra el resultado en la consola.
*/
console.log( '\NFormateando CPFs correctamente:' );
// ?

/*
Cree una expresión regular que coincida con las palabras "junio" o "julio",
utilizando el menor número posible de caracteres en la regex.
Para asegurarse de que la expresión regular funciona, pruébela utilizando el método de coincidencia. Si usted
el método devuelve una matriz de coincidencias. De lo contrario, se
devuelve null.
Muestra el resultado de la coincidencia de la frase en la consola:
"Los meses de enero, junio y julio comienzan con la letra j".
El resultado debería ser:
["Junio", "Julio"]
*/
console.log( '\Ncon las palabras "junio" o "julio" para la frase "Los meses de enero, junio y julio empiezan por la letra j":' );
// ?

/*
Crear una expresión regular que coincida con la apertura de cualquier
etiqueta.
Por ejemplo, "<div>", "<section>", "<blockquote>".
Utilice el método de coincidencia y ejecute la prueba con la siguiente marca:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
El resultado debería ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\Ncon la apertura de una etiqueta HTML:' );
// ?

/*
Crear una expresión regular que coincida con una etiqueta HTML vacía, que coincida con
con la apertura y el cierre de la etiqueta.
Por ejemplo, "<div></div>", "<sección></sección>", "<blockquote></blockquote>".
Utilice el método de coincidencia y pruebe con el etiquetado siguiente:
"<div><div><ul><li/li><li><li><span></li></ul></div>"
El resultado debería ser:
["<li></li>", "<li></li>", "<span></span></span>"]
*/
console.log( '\N- coincidencia con etiquetas HTML vacías (etiqueta de apertura y cierre):' );
// ?

/*
Vamos a complicarlo un poco ahora :D
Crear una expresión regular que coincida con el texto existente dentro de
Etiqueta HTML. El texto debe ser capturado y sustituido por:
'El texto dentro de la etiqueta "[NOMBRE DE LA ETIQUETA]" es "[TEXTO]"'
Utiliza la marca de abajo para hacer el reemplazo:
"<h1>Título de la página</h1><p>Esto es un párrafo</p><footer>Pie de página</footer>"
El marcado debe permanecer como está, sólo el texto debe ser reemplazado.
En el reemplazo, utilice saltos de línea para dejar una etiqueta por línea.
El resultado debería ser el siguiente:
<h1>El texto dentro de la etiqueta "h1" es "Título de la página"</h1>
<p>El texto dentro de la etiqueta "p" es "Esto es un párrafo"</p>
<footer>El texto dentro de la etiqueta "footer" es "Footer"</footer>.
Un consejo: haz el partido poco a poco. Para facilitar las pruebas, utilice el sitio
https://regex101.com/#javascript y comprobar si las capturas son
las capturas son correctas, y luego aplicarlas al código ;)
*/
console.log( '\NReemplazar las etiquetas de texto:' );
// ?
