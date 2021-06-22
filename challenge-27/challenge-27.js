/*
Aprovechando la librería DOM que hicimos la semana pasada, crea ahora para ella
métodos que son similares a los de la matriz, pero que funcionan para el
elementos DOM seleccionados.
Crea los siguientes métodos:
- forEach, map, filter, reduce, reduceRight, every y some.

También crea métodos que comprueban el tipo del objeto pasado como parámetro.
Estos métodos no necesitan depender de la creación de un nuevo elemento DOM, pueden ser estáticos
sean métodos estáticos.

Los métodos estáticos no tienen que usar `new`, pueden ser usados directamente en el objeto.
en el objeto, como en los ejemplos siguientes:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('número'); // false

Cree los siguientes métodos para la comprobación de tipos:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
El método isNull debe devolver `true` si el valor es nulo o indefinido.
*/
