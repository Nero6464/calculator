let num1 = 0, num2 = 0;
let operator_flag = 0;
let ent_flag = 0;
let live_flag = 0;

const numbtn = document.querySelectorAll('button.number');
const display = document.querySelector('.display');
const clrbtn = document.querySelector('#clear');
const operbtn = document.querySelectorAll('.operation');
const entbtn = document.querySelector('#enter');

//Number Button function
numbtn.forEach((button) => {
    button.addEventListener('click', () => {
        
        //First number entry
        if(operator_flag == 0){
            if(ent_flag == 1){
                num1 = 0;
                ent_flag = 0;
            }
            num1 = (10 * num1) + parseInt(button.id);
            display.textContent = num1

        }

        //Second number entry
        if(operator_flag != 0){
            num2 = (10 * num2) + parseInt(button.id);
            display.textContent = num2;

        }
    })
})

//Clear button function
clrbtn.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator_flag = 0;
    display.textContent = 0;

})


//Operator button function
operbtn.forEach((button) => {
    button.addEventListener('click', () => {
        operator_flag = button.id; 
    })
})


//Enter button function
entbtn.addEventListener('click', () => {
    ent_flag = 1;
    if(operator_flag == '+'){
        operator_flag = 0;
        num1 = num1 + num2;
        num2 = 0;
        display.textContent = num1;
    }
    if(operator_flag == '-'){
        operator_flag = 0;
        num1 = num1 - num2;
        num2 = 0;
        display.textContent = num1;
    }
    if(operator_flag == '*'){
        operator_flag = 0;
        num1 = num1 * num2;
        num2 = 0;
        display.textContent = num1;
    }
    if(operator_flag == '/'){
        operator_flag = 0;
        num1 = num1 / num2;
        num2 = 0;
        display.textContent = num1;
    }
})

