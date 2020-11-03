'use strict';
const body = document.querySelector('body');
const day = ['утро', 'день', 'вечер', 'ночь'];
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверк', 'Пятница', 'Суббота'];
const end = Date.parse('1 January 2021');


let nowDate = new Date(),
    nowWeek = nowDate.getDay(),
    nowHours = nowDate.getHours();
function getday() {
    if(nowHours > 0 && nowHours < 6){
        let div =document.createElement('div');
        body.append(div);
        body.innerHTML = `Доброй ночи`;
    } else if (nowHours >= 6 && nowHours < 12) {
        body.innerHTML = `Доброе утро`;
    } else if(nowHours >= 12 && nowHours < 18) {
        body.innerHTML = `Добрый день`;
    } else {
        body.innerHTML = `Добрый вечер`;
    }

}
function getWeek() {
    let div =document.createElement('div');
    body.appendChild(div);
    div.innerHTML = `Сегодня ${week[nowWeek]}`;
}
function getTime () {
    let div =document.createElement('div');
    body.appendChild(div);
    div.innerHTML = `Текущее время: ${nowDate.toLocaleTimeString('en')}`;
}
function getYear() {
    let div =document.createElement('div');
    body.appendChild(div);
    div.innerHTML = `До нового года осталось ${Math.floor((end - nowDate)/1000 / 60 / 60 / 24)} дней`;
}

getday();
getWeek();
getTime ();
getYear();