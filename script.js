window.onload = function(){
// Declaring Variables
  var calcObj = {
        'current': 0,
        'first': 0,
        'second': 0,
        'symbol': undefined
      },
      symbolButtonPressed = false,
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
      answerBox = document.getElementById('answerBox');
// Functions
  // Adds Digit to the First Number
  function addDigit(number){
    if(calcObj.current.toString().length <= 13){
      calcObj.current = calcObj.current * 10 + number;
      answerBox.innerHTML = calcObj.current;
    }
  }
  // Clears the Calculator
  function Clear(){
    calcObj.first = 0;
    calcObj.second = 0;
    calcObj.current = 0;
    symbolButtonPressed = false;
    calcObj.symbol = undefined;
    calcObj.currentLength = 1;
    answerBox.innerHTML = 0;
  }
  // Function that will determine whether or not you will add,subtract,ect...
  function newSymbol(symbol){
    if(symbolButtonPressed == false){
      calcObj.first = calcObj.current;
      calcObj.current = 0;
      calcObj.currentLength = 1;
      calcObj.symbol = symbol;
      symbolButtonPressed = true;
      answerBox.innerHTML = calcObj.first;
    }
  }
  // Evaluates the problem
  function Calculate(){
    if(symbolButtonPressed == true){
      calcObj.second = calcObj.current;
      calcObj.current = 0;
      answerBox.innerHTML  = eval(calcObj.first += calcObj.symbol += calcObj.second);
      symbolButtonPressed = false;
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
};
