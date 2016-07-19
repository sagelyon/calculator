window.onload = function(){
// Declaring Variables
  var firstNumber = 0,
      secondNumber = 0,
      firstNumberLength = 1,
      secondNumberLength = 1,
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
    if(firstNumberLength <= 7){
      firstNumber = firstNumber * 10 + number;
      firstNumberLength++
      answerBox.innerHTML = firstNumber;
    }
  }
  // Clears the Calculator
  function Clear(){
    firstNumber = 0;
    secondNumber = 0;
    firstNumberLength = 1;
    secondNumberLength = 1;
    answerBox.innerHTML = 0;
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

};
