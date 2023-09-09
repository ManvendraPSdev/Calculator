// In lower display we have our ans and in upper display we 
// have the operation


let firstNumber ;
let SecondNumber ;
let opt ;


const Number = document.querySelectorAll(".btn-number");
// We make this Number variable So that we can itterate over 
// every number button   
const operatorButton = document.querySelectorAll(".btn-operator");
const deleteButton = document.querySelector(".DEL-btn");
const allClear = document.querySelector(".AC-btn");
const equal = document.querySelector("#equal");
let upperDisplay = document.querySelector('.upper-display');
let lowerDisplay = document.querySelector('.lower-display');


equal.addEventListener('click' , compute);
deleteButton.addEventListener('click', del);
allClear.addEventListener("click", clear)

Number.forEach((number) => {
    number.addEventListener('click' , function(e){
        let pressedKey = e.target.innerHTML  ;
        // console.log(pressedKey);
        append(pressedKey);
    });
});

// operatorButton.forEach((operatorBTN) => {
//     operatorBTN.addEventListener('click', function (e) {
//         let pressedOperatorKey = e.target.innerHTML;
//         opt = pressedOperatorKey;
//     });
// });

operatorButton.forEach((items) => {
    items.addEventListener("click", function (e) {
      let keyPressed = e.target.innerHTML;
      //console.log(keyPressed);
      chooseOperation(keyPressed);
    });
  });
  




function compute() {
    if (opt ) {
      upperDisplay.innerHTML = upperDisplay.innerHTML.concat("",lowerDisplay.innerHTML);
      SecondNumber = lowerDisplay.innerHTML;
      lowerDisplay.innerHTML = operate(opt, firstNumber, SecondNumber);

    } 
}

function clear(){

    firstNumber = undefined;
    SecondNumber = undefined ;
    opt= undefined ;

    upperDisplay.innerHTML = "";
    lowerDisplay.innerHTML = "";
}


  //MAIN FUNCTION 

function chooseOperation(Symbol){
    if (lowerDisplay.textContent) {
        opt = Symbol;
        firstNumber = lowerDisplay.textContent;
        upperDisplay.textContent = lowerDisplay.textContent.concat("", opt);
        lowerDisplay.textContent = "";
    }
}
  


function del(){
    lowerDisplay.innerHTML = lowerDisplay.innerHTML.toString().slice(0 , -1);
}

function append(number){
    let inputDisplay = lowerDisplay.textContent;
    if(number === '.' && inputDisplay.includes('.'))return ;
    else {
        inputDisplay = inputDisplay.concat("" , number);
        lowerDisplay.innerHTML = inputDisplay ;
    }
}


function operate(opt , firstNumber , SecondNumber){
    let result ;
    first = parseFloat(firstNumber);
    second = parseFloat(SecondNumber);


    switch (opt){
        case '+' :
            result = first + second;
            break ;
        case '-' :
            result = first - second ;
            break ;
        case '*' :
            result = first * second;
            break ;
        case '/' :
            result = first /second;
            break ;
    }
    return result ;
}
