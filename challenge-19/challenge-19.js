/*
Envuelve todo el contenido de este reto en un IIFE.
2. Añade la directiva 'use strict';
3. Cree un archivo index.html y añada este script a él.
*/

/*
Algunos detalles importantes que se nos escaparon en clase:
1. El objeto RegExp() puede recibir un segundo parámetro, que son las banderas:
- var justNumbersAndLetters = new RegExp( '[\da-z]', 'gi' );
2. Dado que la expresión regular pasada al objeto RegExp() es una cadena,
se puede concatenar para generar una regex en tiempo de ejecución,
regex, donde la regex completa debe estar lista antes de su uso.
uso.
*/

/*
- Utilizando el constructor Regex, cree una regex que sólo case números
al principio de la cadena. La coincidencia debe hacerse con todas las coincidencias de cualquier cadena, no sólo con la primera
coincide con cualquier cadena, no sólo con la primera, incluso si tiene
aunque tenga muchas líneas, siempre debe coincidir con los números al principio de cada
línea, no importa cuántos caracteres numéricos estén juntos.
- Asigna esta regex a una variable llamada `justNumbersRegex` y muéstrala
en la consola:
*/
console.log( 'Regex para números usando el constructor:' );
// ?

/*
Compruebe que la expresión regular anterior coincide con el texto de la variable `text`, mostrando el
resultado en la consola. El resultado debería ser:
"[ '10', '50' ]"
*/
var text = '10 años.\N50 discos vendidos.\NY ni siquiera el 10% de mis amigos lo saben'.
console.log( '\NNNnúmeros al principio de la línea de texto:\N' + texto, '\N' );
// ?

/*
- Crear una regex que case números al final de una cadena. Asignar el
regex a una variable llamada `numbersAtTheEnd`.
- La regex debe coincidir con todas las coincidencias de cualquier cadena, incluso si
tiene muchas líneas, siempre debe coincidir con los números al final de cada línea
línea, no importa cuántos caracteres numéricos se encadenen.
Muestra la regex en la consola:
*/
console.log( '\NRegex para números sólo al final de las líneas:' );
// ?

/*
Compruebe que la expresión regular anterior coincide con el texto de la variable "otroTexto",
mostrando el resultado en la consola.
El resultado debería ser:
"[ '12', '6' ]"
*/
var otherText = 'Silvio Santos, de nombre artístico Señor Abravanel (Río de Janeiro, 12 de diciembre de 1930), es un presentador de televisión y empresario brasileño.\N-Propietario del Grupo Silvio Santos, que incluye empresas como Liderança Capitalização (administradora de la lotería Tele Sena), Jequiti Cosméticos y Sistema Brasileiro de Televisão (más conocido como SBT), Silvio Santos posee un patrimonio valorado en aproximadamente 6.000 mil millones de reales.'
console.log( '\NNNnúmeros al final de la línea:\N', otherText, '\Nn' );
// ?

/*
Vamos a crear un método que compruebe si una clase CSS existe en
Marcaje HTML.
- Primero, crea una función llamada `hasClass`;
- Esta función tomará dos parámetros: el primero llamado `markup`, que
el marcado HTML que se está probando, y el segundo `cssClass`, que es la clase que estamos
clase para probar;
- La función debe devolver `true` si la clase existe en el marcado y `false`.
de lo contrario;
- La marca utilizada para la prueba debe ser la de la variable `markup`.
variable abajo;
- ¡No cambie el marcado en la variable de marcado!
- Ejecute la prueba, mostrando en la consola el resultado de las siguientes clases:
- "contenedor", "texto", "fecha", "extracto" y "principal".
- La consola debería mostrar la frase:
"[RESULTADO] para la clase [CLASE]"
- Respuesta Ex:
"true para la clase de contenedor"
- Pruebe una clase a la vez (un console.log por clase).
- Recordando que la función debe funcionar para cualquier marcado HTML y para
cualquier clase que se pruebe. Los datos pasados en el ejercicio son sólo
para ejemplificar.
*/
var markup = '<main> <div class="container"> <span class="text date"></span> <p class='excerpt'></p> </div> </div> <main>';
console.log( '\N¿Qué clases CSS existen en el marcado de abajo?\N', marcado, '\N' );
// ?
