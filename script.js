let num1 = 0, num2 = 0;
let operator_flag = 0;
let ent_flag = 0;
let num2_flag = 0, num1_flag = 0;

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
            display.textContent = num1;
            num1_flag = 1;

        }

        //Second number entry
        if(operator_flag != 0){
            if(operator_flag == '/' && button.id == 0){
                alert('Division by zero not allowed, dumbass');
                reset();
            }
            else{
                num2_flag = 1;
                num2 = (10 * num2) + parseInt(button.id);
                display.textContent = num2;
                if(num1_flag == 1){
                    operate(num1, num2, operator_flag)
                }
            }
        }
    })  
})

//Clear button function
clrbtn.addEventListener('click',reset)


//Operator button function
operbtn.forEach((button) => {
    button.addEventListener('click', () => {
        if(num2_flag == 1){
            num1 = operate(num1, num2, operator_flag)
            num2 = 0;
            display.textContent = round(num1);
        }
        if(num1_flag == 1 || num2_flag ==1){
            operator_flag = button.id; 
        }


    })
})


//Enter button function
entbtn.addEventListener('click', () => {
    ent_flag = 1;

    if(num2_flag == 1 && operator_flag != 0){
        num1 = operate(num1, num2, operator_flag);
        display.textContent = round(num1);
        num2 = 0;
        operator_flag = 0;
        num2_flag = 0;
    }


})


function operate(input1, input2, operation){
    if(operation == '+'){
        input1 = input1 + input2;
    }
    if(operation == '-'){
        input1 = input1 - input2;
    }
    if(operation == '*'){
        input1 = input1 * input2;
    }
    if(operation == '/'){
        input1 = input1 / input2;
    }

    return input1;
}

function reset(){
    num1 = 0;
    num2 = 0;
    num1_flag = 0;
    operator_flag = 0;
    display.textContent = 0;
}

function round(num){
    return Math.round(num * 1000) / 1000
}