'use strict';
let num = Math.floor(Math.random() * 100 + 1);

function getResult (num) {
    
    let number = +prompt("Загадайте число от 1 до 100");
        function getStatus () {

            if (number < num  && number > 0) {
                alert("Загаданное число меньше");
                console.log(num);
                getResult(num);
            } else if( number > num) {
                alert("Загаданное число больше");
                getResult(num);
            } else if (number === null || number === 0 ) {
                alert("Игра закончена");
            } else if (number == num) {
                alert(`Вы выйграли !`);
            }else if (typeof(number) !== 'number' || isNaN(number) || number === " " ) {
                alert("Введите число");
                getResult(num);
            }
        }  
        getStatus () ;
    }
getResult(num);

    

