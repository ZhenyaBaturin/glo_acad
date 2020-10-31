'use strict';


// function game () {
//     let num = Math.floor(Math.random() * 100 + 1);
//     let x = 10;
    
//     function getResult (num) {
//         let number = +prompt("Загадайте число от 1 до 100");
//         if (x === 1){
//             let loser = confirm(`Попытки закончились, хотите сыграть еще?`);
//             if(loser) {
//                 game(); 
//             } 
//               return alert("Игра закончена"); 
//         }
//           function getStatus () {
                
//                 if (number < num  && number > 0) {
//                     x--;
//                     alert(`Загаданное число меньше, осталось ${x} попытка(-ок) `);
//                     getResult(num);
//                 } else if( number > num) {
//                     x--;
//                     alert(`Загаданное число больше, осталось ${x} попытка(-ок) `);
//                     getResult(num);
    
//                 } else if ( number === 0 ) {
//                     alert("Игра закончена");
//                 } else if (number == num) {
//                     let win = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
//                     win ? game(): alert("Игра закончена");
                        
//                 }else if (typeof(number) !== 'number' || isNaN(number) || number === " " ) {
//                     alert("Введите число");
//                     getResult(num);
//                 } 
//             }  
           
//             getStatus () ;
//         }
    
//     getResult(num);
// }
// game();

const myLesson = [
    {lesson: 1, type: 'basic', points: 2},
    {lesson: 2, type: 'additional', points: 4},
    {lesson: 3, type: 'basic', points: 6},
    {lesson: 4, type: 'additional', points: 3},
    {lesson: 5, type: 'basic', points: 4},
    {lesson: 6, type: 'basic', points: 2},
    {lesson: 7, type: 'additional', points: 2},
    {lesson: 8, type: 'basic', points: 6},
    {lesson: 9, type: 'basic', points: 4},
    {lesson: 10, type: 'basic', points: 6},
    {lesson: 11, type: 'additional', points: 5}, 
    {lesson: 12, type: 'basic', points: 2}, 
    {lesson: 13, type: 'additional', points: 2}, 
    {lesson: 14, type: 'basic', points: 4},
    {lesson: 15, type: 'additional', points: 1},
    {lesson: 16, type: 'additional', points: 7},
  ];
  let count = 0;
  myLesson.forEach((num, i) => {
    

    
    
    if(num.type === 'additional') {
        console.log(num);
        myLesson.splice(count - 1, 1)
    } else  {
        num.points = num.points * 2;
        // console.log(num);
        
    }
    count++;
  });
  
  console.log(myLesson);

