'use strict';
let num = Math.floor(Math.random() * 100);

function getResult (num) {
    
    console.log(num);
    let number = +prompt("Загадайте число от 1 до 100");
    console.log(number);
    let x = 0;
        function getStatus () {
            if (number < num) {
                alert("Загаданное число меньше");
                console.log(num);
                getResult(num);
                return x += x;
            } else if( number > num) {
                alert("Загаданное число больше");
                getResult(num);
                return x += x;
            } else if (number === "null" || number === null || number === "") {
                // alert("Игра закончена");
            } else if (number == num) {
                alert(`Вы выйграли с ${x}(-ой) попытки `);
            }else if (typeof(number) !== 'number' ) {
                alert("Введите число");
                // getResult(num);
            }
        }  
        getStatus () ;
    }
    
getResult(num);

    

