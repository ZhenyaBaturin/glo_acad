'use strict';

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
