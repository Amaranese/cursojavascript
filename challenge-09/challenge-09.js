/*
Crear un IIFE que envuelva todo el código de este archivo. También hacer el
indentar el código correctamente, para que esté dentro del IIFE.
*/

/*
Revise las funciones siguientes (`miFunción`, `miFunción2` y `miFunción3`), y
ajustar el posicionamiento de las variables y funciones internas, para que el código
dentro de `console.log` que está devolviendo `undefined` devuelve el valor correcto del
valor de la variable o función llamada.
*/
función miFunción() {
    console.log( 'En la función `miFunción`, el primer número es', número1 );
    console.log( 'En la función `miFunción`, el segundo número es', número2 );
    var number1 = 10;
    devolver número1 + número2;
    var number2 = 20;
}
miFunción();

/*
    miFunción2();
*/
función miFunción2() {
    console.log( 'La suma de 10 y 20 es igual a', sum ? sum() : undefined );
    var sum = function sum() {
        devolver número1 + número2;
    };
    var number1 = 10;
    var number2 = 20;
    devuelve la suma();
}
miFunción2();

/*
    miFunción3();
*/
función miFunción3() {
    console.log( 'La suma de 40 y 50 es igual a', sum() );
    var number2 = 50;
    console.log( 'En la función miFunción3, número1 es igual a', número1 );
    var number1 = 40;
    devuelve la suma();
    función suma() {
        devolver número1 + número2;
    };
}
miFunción3();

/*
En el reto anterior creamos una calculadora, utilizando una estructura funcional.
Ahora vamos a crear otra calculadora, utilizando un enfoque diferente :D
- Crear una función `calculadora` que tome dos valores (números)
como parámetros.
- Esta función debe devolver otra función, que recibe un parámetro
llamado `callback`.
- Este `callback` será una función que pasaremos como parámetro cuando invoquemos
el retorno de `calculadora`.
- El retorno de esta segunda función debe ser la función `callback' pasada
y pasándole los dos valores
que se pasaron a la primera función `calculadora`.
*/
// ?

/*
Declarar una variable llamada `suma`, y asignarle la función `calculadora`,
pasándole dos números como parámetros.
*/
// ?

/*
Sabemos que `suma` tiene ahora una función asignada, que es el retorno de
`calculadora`. Y esa función espera un parámetro `callback`. El `callback`
tiene dos parámetros disponibles, que son los números que acaba de pasar
a la llamada de la "calculadora" anterior.
- Muestra el resultado de la invocación de `suma` en la consola, pasando como parámetro
una función anónima que devolverá la suma de los dos números que este
tiene como argumentos.
*/
console.log( 'El resultado de la suma es:' );
// ?

/*
Ahora declara otras variables llamadas `resta`, `multiplicación`,
`división` y `mod`, y asignarles `calculadora`, pasándoles diferentes
para cada llamada.
*/
// ?

/*
Mostrar las variables anteriores en `consola` (una llamada de consola por variable),
crear la función `callback` que realiza el cálculo para la subracción, la multiplicación
división y módulo (resto de la división), dependiendo de la función utilizada.
Sus respuestas deben estar bajo el `console.log` para cada
llamar.
*/
console.log( 'El resultado de la resta es:' );
// ?

console.log( 'El resultado de la multiplicación es:' )
// ?

console.log( 'El resultado de la división es:' )
// ?

console.log( 'El resto de la división es:' )
// ?
