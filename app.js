const display = document.getElementById('display');
const numBtns = document.querySelectorAll('.number-key');




function numberInput() {
  for(const button of numBtns) {
    button.addEventListener('click', function(){
      display.value += button.textContent;
    })
  }
}



function operateAdd() {
 const addButton = document.querySelector('.add-key');
 addButton.addEventListener('click', function(){
   display.value += ' + ';
  })
}

function operateSubtract() {
  const sutractButton = document.querySelector('.subtract-key');
  sutractButton.addEventListener('click', function(){
    display.value += ' - ';
  })
}


function operateMultiply() {
  const multiplyButton = document.querySelector('.multiply-key');
  multiplyButton.addEventListener('click', function(){
    display.value += ' x '
  })
}






operateMultiply()
operateSubtract()
operateAdd()

numberInput()

