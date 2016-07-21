window.onload = function(){
// Declaring Variables
  var calcObj = {
        'current': 0,
        'first': 0,
        'second': 0,
        'symbol': undefined
      },
      check = {
        'symbolButton': false,
        'addDigits': true,
        'decimal': false
      },
      decimalPlace = 10,
      buttonOne = document.getElementById('one'),
      buttonTwo = document.getElementById('two'),
      buttonThree = document.getElementById('three'),
      buttonFour = document.getElementById('four'),
      buttonFive = document.getElementById('five'),
      buttonSix = document.getElementById('six'),
      buttonSeven = document.getElementById('seven'),
      buttonEight = document.getElementById('eight'),
      buttonNine = document.getElementById('nine'),
      buttonZero = document.getElementById('zero'),
      buttonClear = document.getElementById('clear'),
      buttonDivide = document.getElementById('divide'),
      buttonMultiply = document.getElementById('multiply'),
      buttonSubtract = document.getElementById('subtract'),
      buttonAdd = document.getElementById('add'),
      buttonEqual = document.getElementById('equal'),
      answerBox = document.getElementById('answerBox'),
      buttonDecimal = document.getElementById('decimal');
// Functions
  // Adds Digit to the First Number
  function addDigit(number){
    if(check.addDigits == true){
      if(calcObj.current.toString().length <= 13){
        if (check.decimal == true) {
          calcObj.current = number / decimalPlace  + calcObj.current;
          answerBox.innerHTML = calcObj.current;
          decimalPlace = decimalPlace * 10;
        }
        if(check.decimal == false){
          calcObj.current = calcObj.current * 10 + number;
          answerBox.innerHTML = calcObj.current;
        }
      }
    }
  }
  // Clears the Calculator
  function Clear(){
    calcObj.first = 0;
    calcObj.second = 0;
    calcObj.current = 0;
    calcObj.symbol = undefined;
    check.symbolButton = false;
    check.addDigits = true;
    check.decimal = false;
    answerBox.innerHTML = 0;
    decimalPlace = 10;
  }
  // Function that Will Determine Whether or Not You Will Add,Subtract,ect...
  function newSymbol(symbol){
      calcObj.first = calcObj.current;
      calcObj.current = 0;
      calcObj.symbol = symbol;
      check.symbolButton = true;
      check.addDigits = true;
      check.decimal = false;
      answerBox.innerHTML = calcObj.first;
      decimalPlace = 10;
    }
  // Adds a Decimal Point
  function addDecimal(){
      check.decimal = true;
  }
  // Evaluates the Problem
  function Calculate(){
    if(check.symbolButton == true){
      calcObj.second = calcObj.current;
      calcObj.current = eval(calcObj.first += calcObj.symbol += calcObj.second);
      answerBox.innerHTML  = calcObj.current;
      check.symbolButton = false;
      check.addDigits = false;
      check.decimal = false;
      decimalPlace = 10;
    }
  }
// Add Functions to the Buttons
  buttonOne.onclick = function(){addDigit(1);};
  buttonTwo.onclick = function(){addDigit(2);};
  buttonThree.onclick = function(){addDigit(3);};
  buttonFour.onclick = function(){addDigit(4);};
  buttonFive.onclick = function(){addDigit(5);};
  buttonSix.onclick = function(){addDigit(6);};
  buttonSeven.onclick = function(){addDigit(7);};
  buttonEight.onclick = function(){addDigit(8);};
  buttonNine.onclick = function(){addDigit(9);};
  buttonZero.onclick = function(){addDigit(0);};
  buttonClear.onclick = function(){Clear();};
  buttonDivide.onclick = function(){newSymbol('/');};
  buttonMultiply.onclick = function(){newSymbol('*');};
  buttonAdd.onclick = function(){newSymbol('+');};
  buttonSubtract.onclick = function(){newSymbol('-');};
  buttonEqual.onclick = function(){Calculate();};
  buttonDecimal.onclick = function(){addDecimal();};
};
