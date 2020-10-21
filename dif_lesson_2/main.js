'use strict';
// lesson 2
// const num = 266219;
// let count = 1;
// for (let i = 0; i < num.toString().length; i++) {
//     count *= +num.toString()[i];
// }
// console.log(count);
// count = count ** 3;
// alert(count.toString().slice(0, 2));

// lesson3
// const lang = prompt('Введите язык', 'ru-eng');
// const ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const eng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const namePerson = prompt("Пользователь, введите свое имя на русском языке");
// //3.1.a
//  if (lang === "ru") {
//     console.log(ru[new Date().getDay()]);
// } else if (lang === "eng") {
//     console.log(eng[new Date().getDay()]);
// } else {
//     console.log('Что-то пошло не так');
// }

// 3.1.b
// switch (lang) {
//     case 'ru':
//         console.log(ru[new Date().getDay()]);
//         break;
//     case 'eng':
//         console.log(eng[new Date().getDay()]);
//         break;
//     default:
//         console.log('Что-то пошло не так');
// }

// 3.1.c
// const n = [
//     ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
//     ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// ];
// let count; 
//  (lang === "ru") ? count = 0:
//  (lang === "eng") ? count = 1 : console.log("Введите верные данные");
 
//     console.log(n[count][new Date().getDay()]);

// // 3.2
// (namePerson.toLowerCase() === 'максим') ? console.log("Преподаватель"):
// (namePerson.toLowerCase() === 'артем') ? console.log("Директор") : console.log("Студент");

// lesson 4
// 4.1
// const getValue = (a) => {
//     if (typeof a === 'string') {
//         a.trim();
//         if (a.trim().length > 30) {
//             alert(`${a.trim().substring(0, 30)}...`); 
//         }
//     } else {
//         alert( "Вы ввелли не строку");
//     }
// };
// getValue('Тут введен какой-то текст с большим количесвом строк');

// lesson 5
// 5.1
// const arr = ['342', '12', '234', '454', '837', '21', '653'];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === '2' || arr[i][0] === '4'){
//         console.log (arr[i]);
//         console.log(typeof(arr[i]));
//     } 
// }
// 5.2

// x:for(let i = 1; i < 100; i++) {
//     for(let n = 2; n < i; n++){
//         if (i % n === 0 ) {
//             continue x;
//         }
//     }
//     console.log(`${i} делитель 1 и ${i} `);
// }

// lesson 7
// const body = document.querySelector('body');
// let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// week.forEach((item, i) => {

//     let p = document.createElement('p');
//     document.body.append(p);
//     p.innerHTML = item;
//     if ( i === 0 || i === 6) {
//         p.style.borderBottom = '2px dashed';
//         p.style.display = 'inline-block';
//     }
//     if(new Date().getDay() === i ){
//         p.style.fontWeight = 'bold';
        
//     }
// });


// lesson 9
let data = new Date();
const body = document.querySelector('body');
    let p = document.createElement('p');
    document.body.append(p);
    let p2 = document.createElement('p');
    document.body.append(p2);


    function time () {
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    month = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];

let nowHours = new Date().getHours();
let nowMinutes = new Date().getMinutes();
let nowSeconds = new Date().getSeconds();
  
let minute =['минута', 'минуты', 'минут'];
let second = ['секунда', 'секунды', 'секунд']
      
let hours;
if (new Date().getHours() === 1 || new Date().getHours() === 21) {
    hours = 'час';
}else if (new Date().getHours() >= 5  || new Date().getHours() >= 20 ) {
     hours = 'часа';
} else {
    hours = 'часов';
}

let getTimes = (num, text) => {
    let m = Math.abs(num) % 100; 
    let n1 = m % 10;
    if (m > 10 && m < 20) { 
        return text[2]; 
    }
    if (n1 > 1 && n1 < 5) { 
        return text[1]; 
    }
    if (n1 === 1) {
         return text[0]; 
        }
    return text[2]
};
       
let getMore = (n) => {
    if (n < 10) {
        return `0${n}`;
    }
    return n;
};
    p.innerHTML = `Сегодня ${week[new Date().getDay()]}, ${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}, ${nowHours} ${hours} ${nowMinutes} ${getTimes(nowMinutes, minute)}  ${nowSeconds} ${getTimes(nowSeconds, second)}    `;
    p2.innerHTML = ` ${getMore(new Date().getDate())}.${getMore(new Date().getMonth())}.${getMore(new Date().getFullYear())} - ${getMore(nowHours)}.${getMore(nowMinutes)}.${getMore(nowSeconds)}`;
}

let nowTime = setInterval(time , 1000);
