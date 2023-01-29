let num1 = 0, num2 = 0;
let operator_flag = 0;
let live_flag = 0;

const numbtn = document.querySelectorAll('button.number');
const display = document.querySelector('.display');
const clrbtn = document.querySelector('#clear');
const operbtn = document.querySelectorAll('.operation');

numbtn.forEach((button) => {
    button.addEventListener('click', () => {
        
        //First number entry
        if(operator_flag == 0){
            num1 = (10 * num1) + parseInt(button.id);
            display.textContent = num1

        }

        //Second number entry
        if(operator_flag == 1){
            num2 = (10 * num2) + parseInt(button.id);
            display.textContent = num2;

        }
    })
})


clrbtn.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator_flag = 0;
    display.textContent = 0;

})


operbtn.forEach((button) => {
    button.addEventListener('click', () => {
        operator_flag = button.id; 
    })
})


