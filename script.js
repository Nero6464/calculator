let num1, num2;
let operator_flag = 0;

const numbtn = document.querySelectorAll('button.number');

numbtn.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator_flag == 0){
            num1 = button.id;
            document.querySelector('.display').textContent = num1

        }
    })
})

