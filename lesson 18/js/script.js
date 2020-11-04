'use strict';
window.addEventListener('DOMContentLoaded', function () {
    
    //timer
function countTimer(deadline) {
    let timerHourd = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSecond = document.querySelector('#timer-seconds');
        updateClock ();
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
countTimer('06 november 2020');
//меню
const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('close-btn')){
            handlerMenu();
        } else if (target.matches('menu')){
            target = target.closest('ul>li');
            if( target === null){
                return;
            }else if(target.matches('li')){
                handlerMenu();
            } 
        } else {
            target = target.closest('.menu');
            console.log(target);
            if (target === null) {
                menu.classList.remove('active-menu');
                return;
            }
            else if(target.matches('.menu')){
                handlerMenu(); 
            } 
        }
    });

};
toggleMenu();

//popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
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
    
    popup.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
        if(!target){
            popup.style.display = 'none';
        }
        }
            
    });

};
togglePopUp();
// стрелка скролл
const toggleStr = () => {
    const arrow = document.querySelector('main>a');
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        const idBlock = arrow.getAttribute('href');
        console.log(idBlock);
        document.querySelector(idBlock).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    });
};
toggleStr();
//табы
const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = document.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
            
        } 
    };
        tabHeader.addEventListener('click', (e) => {
            let target = e.target;
                target =target.closest('.service-header-tab');/*проверяет у родителя о наличие необходимого атрибута*/ 
            if(target.classList.contains('service-header-tab')){
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
};
tabs();

























});