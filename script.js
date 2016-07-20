window.onload = function(){
// Declaring Variables
  var currentNumber = 0,
      firstNumber = 0,
      secondNumber = 0,
      currentNumberLength = 1,
      symbolUsed = undefined,
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
    if(currentNumberLength <= 7){
      currentNumber = currentNumber * 10 + number;
      currentNumberLength++
      answerBox.innerHTML = currentNumber;
    }
  }
  // Clears the Calculator
  function Clear(){
    firstNumber = 0;
    secondNumber = 0;
    currentNumber = 0;
    symbolButtonPressed = false;
    symbolUsed = undefined;
    currentNumberLength = 1;
    answerBox.innerHTML = 0;
  }
  // Function that will determine whether or not you will add,subtract,ect...
  function newSymbol(symbol){
    if(symbolButtonPressed == false){
      firstNumber = currentNumber;
      currentNumber = 0;
      currentNumberLength = 1;
      symbolUsed = symbol;
      symbolButtonPressed = true;
      answerBox.innerHTML = firstNumber;
    }
  }
  // Evaluates the problem
  function Calculate(){
    secondNumber = currentNumber;
    currentNumber = 0;
    answerBox.innerHTML  = eval(firstNumber += symbolUsed += secondNumber);
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
