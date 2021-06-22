/*
Envuelve todo el contenido de este reto en un IIFE.
2. Añade la directiva 'use strict';
3. Cree un archivo index.html y añada este script a él.
*/

/*
En todos los ejercicios de este reto, vamos a utilizar
¡expresiones! Para ello, utilizaremos el texto que aparece a continuación. Póngalo en un
variable llamada `texto`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Río Grande, 13 de junio de 1804 - Río de Janeiro, 18 de julio de 1875), apodado "El Centauro de Guante", fue un militar, político, abolicionista y monárquico brasileño".
*/
// ?

/*
Empecemos con algunos chistes fáciles :D
Sustituye el nombre "Manuel Marques de Sousa" por tu nombre, y muestra el resultado
en la consola:
*/
console.log( 'Añadiendo su nombre en el texto:' );
// ?

/*
Ahora, sustituye la palabra "brasileño" por tu ciudad natal y muestra en el
consola.
Ej: Si eres de São Paulo, sustituye por "paulista".
*/
console.log( '\N-volviendo a la naturalidad:' );
// ?

/*
Sustituye todos los números por un guión `-`. Cada carácter numérico debe
ser una raya. Muestra el resultado en la consola:
*/
console.log( '\NIntercambio de números por -:' );
// ?

/*
Reemplazar todas las letras (sólo las letras) desde la "D" mayúscula hasta la "h" minúscula
con "0" (número cero). Muestra el resultado en la consola:
*/
console.log( '\NSustituir "D" por "h" minúscula por "0":' );
// ?

/*
Sustituya todas las "A" (mayúsculas o minúsculas) por "4".
Muestra el resultado en la consola:
*/
console.log( '\NCambiando "A" y "a" por "4":' );
// ?

/*
Sustituye la frase "El centauro de los guantes" por mayúsculas utilizando
el método `toUpperCase()`. Muestra el resultado en la consola:
*/
console.log( '\N-"El centauro de guante" en mayúsculas:' );
// ?

/*
Ahora sustituiremos las fechas con el formato "13 de junio de 1804" por
"13/06/1804". Lo primero que hay que hacer es crear una función llamada
Tomará un parámetro (el nombre del mes) y deberá
devuelve el número correspondiente a ese mes.
Ej: Si el usuario introduce "marzo", debería devolver "03" (en cadena de todos modos).
Los números con menos de dos dígitos deben llevar un cero delante.
Entonces, crea la función y muestra en la consola los rendimientos de los meses de marzo,
Septiembre y diciembre.
Utilice un console.log para cada mes, utilizando la declaración
"El mes de [NOMBRE DEL MES] está representado por el número [NÚMERO DEL MES]".
*/
console.log( '\NMeses representados por números:' );
// ?

/*
Ahora, declare una variable llamada `regexDate` que recibirá la expresión regular
que coincida con las fechas. Crear grupos de captura para el
día, mes y año. En el caso de los meses, sólo puede coincidir con los meses que aparecen en el texto.
meses que están en el texto, no es necesario añadirlos todos.
Con lo que hemos visto hasta ahora, puedes hacerlo :D
Mostrar la regex en la consola.
*/
console.log( '\NRegex que coincidirá con las fechas del texto:' )
// ?

/*
Ahora crea la función que hará el reemplazo de datos. La función se llamará
`replaceDate`. Debería devolver la fecha en el formato:
"[DAY]/[MONTH]/[YEAR]"
Después de crear la función, sustituye las fechas en el texto, mostrando el resultado en el
consolar el resultado.
*/
console.log( '\N-Sustituir fechas:' );
// ?
