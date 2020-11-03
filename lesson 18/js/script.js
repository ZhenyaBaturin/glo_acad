'use strict';
window.addEventListener('DOMContentLoaded', function () {
    
    //timer
function countTimer(deadline) {
    let timerHourd = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSecond = document.querySelector('#timer-seconds');
        // получаем deadline 
    function getTimeRemaiming() {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = Math.max(((dateStop - dateNow) / 1000), 0),
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return {timeRemaining, hours, minutes, seconds};
    }
    // подстовляет нули
    function oneZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    // выводим deadline  в дом
    function updateClock () {
        let timer = getTimeRemaiming();
        timerHourd.textContent = oneZero(timer.hours);
        timerMinutes.textContent = oneZero(timer.minutes);
        timerSecond.textContent = oneZero(timer.seconds);
        if (timer.timeRemaining <= 0) { 
            clearInterval(idInterval);
        } 
        
    }
    let idInterval = setInterval(updateClock, 1000);
}
countTimer('03 november 2020');
//меню
const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', () => {
        handlerMenu();
    });
    closeBtn.addEventListener('click', () => {
        handlerMenu();
    });
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            handlerMenu();
        });
    });
};
toggleMenu();

//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
    let count = -30;
    popupBtn.forEach((item) => {
        item.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 768) {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'block';
                popupContent.style.top = '-30%';
                let getAnimPopup = () => {
                    count++;
                    if(count < 11) {
                        popupContent.style.top = `${count}%`;
                    } else {
                        clearInterval(idInterval);
                        count = -30;
                    }
                };
                let idInterval = setInterval(getAnimPopup, 10);
                }

        });
    });
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

};
togglePopUp();

























});