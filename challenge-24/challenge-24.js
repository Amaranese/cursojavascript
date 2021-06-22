/*
¡Nuestra calculadora ya funciona! La idea de este desafío es modularizar
el código, según lo visto en el aula anterior. Repartir las responsabilidades
en funciones, donde cada función hace una única función, y lo hace bien.

- Elimina las duplicaciones de código;
- elimina los códigos que están solos en las funciones (declaraciones de variables,
listeners de eventos, etc);
- realiza refacciones para mejorar este código, pero de forma que se mantenga con la
misma funcionalidad.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="botón-número"]');
var $buttonsOperations = document.querySelectorAll('[data-js="botón-operación"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false);
});
Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', handleClickOperation, false);
});
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operador === últimoEstado;
  });
}

function removeLastItemIfIsAnOperator(number) {
  if(isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfIsAnOperator($visor.value);
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operador = accumulated.split('').pop();
    var lastValue = removeLastItemIfIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    switch(operador) {
      caso '+':
        return ( Número(primerValor) + Número(últimoValor) ) + lastOperator;
      case '-':
        return ( Número(primerValor) - Número(últimoValor) ) + lastOperator;
      caso "x":
        return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
      case '÷':
        return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
    }
  });
}
