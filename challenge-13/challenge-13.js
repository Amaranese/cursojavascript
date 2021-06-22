/*
Envuelve todo el código de este reto en un IIFE.
*/

/*
Crea un array y muestra la representación en forma de cadena de ese array en la consola,
utilizando el método visto en la lección 13.
*/
console.log( 'El array en formato de cadena es:' );
// ?

/*
Crea 2 arrays `sul` y `sudeste`, que serán las regiones de Brasil.
Cada matriz debe contener los estados de esa región.
*/
// ?

/*
Crear una variable llamada `brasil` para mantener las dos regiones
concatenado. Mostrar `brasil` en la consola.
*/
console.log( '\N- Algunos Estados en Brasil:' );
// ?

/*
Añade 3 nuevos estados de la región Norte al principio de la matriz y muéstralos en la consola.
*/
console.log( '\Nmás estados añadidos:' ); ?
// ?

/*
Quitar el primer estado de la matriz `brasil` y mostrarlo en la consola.
*/
console.log( '\Nmás estados eliminados:' ); //
// ?

/*
Crea un nuevo array llamado `newSul`, para contener sólo los estados del sur,
tomando de la matriz `brasil`. No elimine estos elementos de `brasil`.
*/
// ?

/*
Muestra a la consola qué estados están en `newSul`.
*/
console.log( '\N-Estados del Sur:' );
// ?

/*
Muestra en la consola todos los estados que están en `brasil`.
*/
console.log( '\N-Estados del Sur de Brasil:' ); // ?
// ?

/*
Crea un nuevo array llamado `nordeste`, que tiene los estados del noreste.
*/
// ?

/*
Muestra los estados del noreste en la consola.
*/
console.log( 'Estados del noreste:' );
// ?

/*
Eliminar los estados de `sudeste` de `brasil`, poniéndolos en una variable
variable llamada `nuevaSudeste`.
*/
// ?

/*
Añade los estados `nordeste` a la matriz `brasil`. Estos estados deben ser
estar en el mismo nivel que los estados existentes, no en una matriz separada.
*/
// ?

/*
Mostrar los estados en `newSoutheast` en la consola.
*/
console.log( '\N-Estados en nuevaSudeste:' );
// ?

/*
Mostrar en la consola los estados en `brasil`.
*/
console.log( '\NAlgunos Estados en la nuevaSudeste:' ); // ?
// ?

/*
usando forEach, recorre el array `brasil` y genera un nuevo array llamado
`nuevoBrasil`. Esta matriz debe tener cada elemento como un objeto, con el
propiedades:
- `id`: que será el índice del array `brasil`,
- state`: que será el estado del array `brasil`.
*/
// ?

/*
Mostrar la matriz `newBrasil` en la consola
*/
console.log( '\NnuevoBrasil:' );
// ?

/*
Recorre la matriz `brasil` y comprueba si los estados tienen más de 7 letras cada uno,
asignando el resultado a una variable. Si lo hace, muestra la declaración en la consola:
- "¡Sí, todos los estados tienen más de 7 letras!"
De lo contrario, se mostrará en la consola:
- "¡No todos los estados tienen más de 7 letras!"
*/
console.log( '¿Todos los estados de `brasil` tienen más de 7 letras?' );
// ?

/*
Recorre el array `brasil` y comprueba si Ceará está incluido, asignando el
a una variable. Si ese estado existe en el array, muestra la declaración en el
consola:
- "¡Ceará está incluido!"
En caso contrario, muestra la frase:
- "Ceará no está incluido :("
*/
console.log( '\N¿Ceará está incluido en `brasil`?' );
// ?

/*
Recorre el array `nuevoBrasil` y crea un nuevo array que añada 1 al ID de cada
en este array, y añade la siguiente frase a la propiedad `state`:
- "[ESTADO] pertenece a Brasil".
Asigna el nuevo array a una variable llamada `map`.
*/
// ?

/*
Muestra en la consola el array creado anteriormente:
*/
console.log( '\N-NovedadBrasil ahora con más información:' );
// ?

/*
Filtrar la matriz creada anteriormente, devolviendo sólo los estados que tienen
incluso ID. Asigna el valor a una variable llamada `filtro`.
*/
// ?

/*
Muestra la matriz filtrada anterior en la consola.
*/
console.log( '\N-Estados con ID par:' );
// ?
