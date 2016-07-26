window.onload = function(){
// Declaring Variables
  var calcObj = {
        'current': '0', // Number that is being displayed currently
        'first': 0, // First number in the equation
        'second': 0, // Second number in the equation
        'symbol': undefined // Symbol that you are using for the equation
      },
      check = {
        'symbolButton': false, // Checks if any of the symbol buttons have been pressed
        'addDigits': true, // Checks if you are allowed to add digits to the current number
        'decimal': false // Checks if you haved used a decimal point in the current number
      },
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
    if(check.addDigits == true && check.decimal == false){
      if (number == '.') {
        check.decimal = true;
      }else if(calcObj.current[0] == '0'){
        calcObj.current = calcObj.current.slice(1);
      }
      if(calcObj.current.length <= 13){
          calcObj.current = calcObj.current + number;
          answerBox.innerHTML = calcObj.current;
      }
    }else if (number != '.') {
      if(calcObj.current.length <= 13){
          calcObj.current = calcObj.current + number;
          answerBox.innerHTML = calcObj.current;
      }
    }
  }
  // Clears the Calculator
  function Clear(){
    calcObj.first = 0;
    calcObj.second = 0;
    calcObj.current = '0';
    calcObj.symbol = undefined;
    check.symbolButton = false;
    check.addDigits = true;
    check.decimal = false;
    answerBox.innerHTML = 0;
  }
  // Function that Will Determine Whether or Not You Will Add,Subtract,ect...
  function newSymbol(symbol){
    if(check.symbolButton == false){
        calcObj.first = calcObj.current;
        calcObj.current = '0';
        calcObj.symbol = symbol;
        check.symbolButton = true;
        check.addDigits = true;
        check.decimal = false;
        answerBox.innerHTML = calcObj.first;
      }
    }
  // Evaluates the Problem
  function Calculate(){
    if(check.symbolButton == true){
      calcObj.second = calcObj.current;
      calcObj.current = math.round(eval(calcObj.first += calcObj.symbol += calcObj.second)*1e+13)/1e+13;
      answerBox.innerHTML  = calcObj.current;
      check.symbolButton = false;
      check.addDigits = false;
      check.decimal = false;
    }
  }



// Add Functions to the Buttons
  buttonClear.onclick = function(){Clear();};
  buttonOne.onclick = function(){addDigit('1');};
  buttonTwo.onclick = function(){addDigit('2');};
  buttonThree.onclick = function(){addDigit('3');};
  buttonFour.onclick = function(){addDigit('4');};
  buttonFive.onclick = function(){addDigit('5');};
  buttonSix.onclick = function(){addDigit('6');};
  buttonSeven.onclick = function(){addDigit('7');};
  buttonEight.onclick = function(){addDigit('8');};
  buttonNine.onclick = function(){addDigit('9');};
  buttonZero.onclick = function(){addDigit('0');};
  buttonDecimal.onclick = function(){addDigit('.');};
  buttonDivide.onclick = function(){newSymbol('/');};
  buttonMultiply.onclick = function(){newSymbol('*');};
  buttonAdd.onclick = function(){newSymbol('+');};
  buttonSubtract.onclick = function(){newSymbol('-');};
  buttonEqual.onclick = function(){Calculate();};

};
