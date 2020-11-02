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

let myLesson = [
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

  let basic = [];
  myLesson.forEach((num, i) => {
    if(num.type === 'basic') {
      num.points = num.points / 2;
      basic.push(num);
    } 
  });
  console.log(basic);

  // myLesson = myLesson.filter((item) => {
  //   if(item.type === 'basic') {
  //     item.points = item.points / 2;
  //     return item;
  //   } 
  // });
  // console.log(myLesson);

//   const sum = document.querySelector('#sum');
//   const mult = document.querySelector('#mult');
//   const a = document.querySelector('#a');
//   const b = document.querySelector('#b');
//   const res = document.querySelector('#res');


//   const calculator = {
//   sum: function(){
    
//     return +a.value + +b.value;
//   },
//   mult: function(){
    
//     return a.value * b.value;
//   },
//   show: function(){
//     mult.addEventListener('click', () => {
//       res.value = this.mult();
//     });
//     sum.addEventListener('click', () => {
//       res.value = this.sum();
//     });
//   }
// };


// calculator.show();

// function getResult(x,y){
//   let result = 0;
  
//   let sum = x ** y;
 
//   for(let i = 0; i < sum.toString().length; i++) {
//     result += Number(sum.toString()[i]);
//   }

//   return result;
// }

// console.log(getResult(4, 8));
// const country = document.querySelector('#country');
// const city = document.querySelector('#city');
// const result = document.querySelector('.result');

// const cityArr = {
//   rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
//   uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
//   bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
//   jap: ['Токио', 'Киото', 'Осака', 'Иокогама'], 
//   write: function (){
//     city.addEventListener('change', () => {
//       result.innerHTML = `${country.options[document.getElementById('country').selectedIndex].text}    ${city.value}`;
//     });
//     result.innerHTML = `${country.options[document.getElementById('country').selectedIndex].text}    ${city.value}`;
//   },

//   countryCity: function() {
//     if(country.value === 'rus') {
//       this.rus.forEach((elem) => {
//         let option = document.createElement('option');
//         option.textContent = `${elem}`;
//         city.append(option);
//       });
//     }else if (country.value === 'uk'){
//       this.uk.forEach((elem) => {
//         let option = document.createElement('option');
//         option.textContent = `${elem}`;
//         city.append(option);
//       });
//     }else if (country.value === 'bel'){
//       this.bel.forEach((elem) => {
//         let option = document.createElement('option');
//         option.textContent = `${elem}`;
//         city.append(option);
//       });
//     }else if (country.value === 'jap'){
//       this.jap.forEach((elem) => {
//         let option = document.createElement('option');
//         option.textContent = `${elem}`;
//         city.append(option);
//       });
      
//     }
//     this.write();
//   },
// };
// cityArr.countryCity();
// country.addEventListener('change',(e) => {
//   city.innerHTML = null;
//   cityArr.countryCity();
// //не получается через e.target
// console.log(e.target.value);
// });


