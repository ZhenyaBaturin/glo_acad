'use strict';


function game () {
    let num = Math.floor(Math.random() * 100 + 1);
    let x = 10;
    
    function getResult (num) {
        let number = +prompt("Загадайте число от 1 до 100");
        if (x === 1){
            let loser = confirm(`Попытки закончились, хотите сыграть еще?`);
            if(loser) {
                game(); 
            } 
              return alert("Игра закончена"); 
        }
          function getStatus () {
                
                if (number < num  && number > 0) {
                    x--;
                    alert(`Загаданное число меньше, осталось ${x} попытка(-ок) `);
                    getResult(num);
                } else if( number > num) {
                    x--;
                    alert(`Загаданное число больше, осталось ${x} попытка(-ок) `);
                    getResult(num);
    
                } else if ( number === 0 ) {
                    alert("Игра закончена");
                } else if (number == num) {
                    let win = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
                    win ? game(): alert("Игра закончена");
                        
                }else if (typeof(number) !== 'number' || isNaN(number) || number === " " ) {
                    alert("Введите число");
                    getResult(num);
                } 
            }  
           
            getStatus () ;
        }
    
    getResult(num);
}
game();

