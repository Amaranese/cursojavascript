/*
Crea un IIFE que envuelva todo este archivo (incluyendo este comentario),
y la sangría es correcta.
*/

/*
Sin cambiar el código en el `console.log` de abajo, haz el retorno
utilizando los Objetos Envolventes como "convertidores" de los valores de las variables.
de las variables. Analiza lo que se imprime en la consola para ver cómo
resolver el problema adecuadamente.
*/
var five = '5';
console.log( five + ' ¿es un número?', typeof five == 'number' );

var concat = 10 + 10;
console.log( '"' + concat + '" ¿es una cadena? ¿Y es igual a '1010'?', typeof concat === 'string' );

/*
Volviendo al ejemplo de la calculadora, utilicemos otra
enfoque, pero esta vez separando algunas responsabilidades.
- En primer lugar, crea un objeto llamado `operación` que tendrá las propiedades:
'+', '-', '*', '/' e '%'.
- A cada propiedad se le dará una función (por lo que serán métodos), y esa función
recibirá dos parámetros y devolverá la operación de su
utilizando los valores pasados como parámetros.
*/
// ?

/*
Crea una función llamada `isOperatorValid` que tomará un operador por parámetro.
como parámetro.
- Esta función comprobará si el operador que se le pasa como
es válido, es decir, si es igual a "+", "-", "*", "/", o
'%'.
- Si es igual a alguno de ellos, debería devolver "true".
En caso contrario, "falso".
- El reto es hacer la devolución sin usar "if" o "switch".
*/
// ?

/*
Ahora vamos a crear la calculadora.
- Crear una función llamada `calculadora` que tomará como parámetro un
operador;
- Si el operador no es válido, la función debe devolver "false";
- Si el operador es válido, devuelve una segunda función que tomará dos
parámetros;
- Si uno de los parámetros no es un número, devuelve "false";
- En caso contrario, devuelve el método del objeto "operación" creado anteriormente, basado en el
pasado a la función "calculadora", y pasando a este método
los dos parámetros de la función de retorno de "calculadora".
*/
// ?

/*
Crea una función llamada "showOperationMessage" que toma tres parámetros:
- el operador, el primer número y el segundo número. El retorno de la función
debería ser la frase:
'La operación [NÚMERO1] [OPERADOR] [NÚMERO2] =';
Esta función mostrará el mensaje de la operación que crearemos más adelante.
*/
// ?

/*
Cree una función llamada "showErrorMessage" que tome un parámetro: el
operador de la operación de cálculo, cuando la operación no es válida.
Esta función debe devolver la sentencia:
'¡Operación "[OPERADOR]" no permitida!'
*/
// ?

/*
¡Nuestra calculadora está lista! Ahora vamos a probarlo:
PASO 1:
- Declarar 3 variables: "número1" y "número2", que comienzan con un valor de cero, y
"operationSignal", sin valor por ahora.
*/
// ?

/*
PASO 2:
Asigna a la variable operationSignal el operador de suma, y declara un
variable llamada "suma" que recibe la función "calculadora", pasando
la variable que recibe el signo de la operación.
*/
// ?

/*
PASO 3:
"suma" es ahora una función, y si el signo correcto no se pasó a la
calculadora", la "suma" será falsa. Asegúrese de que "suma" no es
"false", y luego asignar a las variables "number1" y "number2", dos números
que serán los operandos de la operación de suma.
A continuación, muestra el resultado de la operación en la consola, pasando dos
al método "log" de "console":
- El primero será el mensaje de la operación (utilizando la función creada anteriormente);
- La segunda, la función suma, pasando los dos operandos.
- Si la "suma" es "falsa", muestra el mensaje de error en la consola.
*/
// ?

/*
Repite desde el "PASO 2" con las operaciones de sustracción, multiplicación
división y resto. Crear variables con los nombres "sustracción",
"multiplicación", "división" y "mod".
*/
// ?

/*
Repita el PASO 2 de nuevo, pero pasando un operador no válido, para ver si
el mensaje de error se mostrará en la consola.
*/
// ?
