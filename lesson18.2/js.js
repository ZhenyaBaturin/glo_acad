'use strict';
const body = document.querySelector('body');
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверк', 'Пятница', 'Суббота'];
const end = Date.parse('1 January 2021');


let nowDate = new Date(),
    nowWeek = nowDate.getDay(),
    nowHours = nowDate.getHours();
function getday() {
    let div =document.createElement('div');
    body.append(div);
    setInterval(() => {
        if(nowDate > 0 && nowHours < 6){
            div.innerHTML = `Доброй ночи`;
        } else if (nowHours >= 6 && nowHours < 12) {
            div.innerHTML = `Доброе утро`;
        } else if(nowHours >= 12 && nowHours < 18) {
            div.innerHTML = `Добрый день`;
        } else {
            div.innerHTML = `Добрый вечер`;
        }
    }, 1000);
}
function getWeek() {
    let div =document.createElement('div');
    body.appendChild(div);
    setInterval(() => {
        div.innerHTML = `Сегодня ${week[nowWeek]}`;
    }, 1000);
}
function getTime () {
    let div =document.createElement('div');
    body.appendChild(div);
    setInterval(() => {
        div.innerHTML = `Текущее время: ${new Date().toLocaleTimeString('en')}`;
    }, 1000);

    
}
function getYear() {
    let div =document.createElement('div');
    body.appendChild(div);
    setInterval(() => {
        div.innerHTML = `До нового года осталось ${Math.floor((end - nowDate)/1000 / 60 / 60 / 24)} дней`;
    }, 1000);
}

getday();
getWeek();
getTime();
getYear();