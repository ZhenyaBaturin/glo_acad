'use strict';
window.addEventListener('DOMContentLoaded', function () {
    
    //timer
function countTimer(deadline) {
    let timerHourd = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSecond = document.querySelector('#timer-seconds');
        // updateClock ();
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
    let idInterval = setInterval(updateClock, 1000);
    function updateClock () {
        let timer = getTimeRemaiming();
        timerHourd.textContent = oneZero(timer.hours);
        timerMinutes.textContent = oneZero(timer.minutes);
        timerSecond.textContent = oneZero(timer.seconds);
        if (timer.timeRemaining <= 0) { 
            clearInterval(idInterval);
        } 
        
    }
    
}
countTimer('20 november 2020');
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
//слайдер
const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        slider = document.querySelector('.portfolio-content');
    let currentSlide = 0,
        interval = 0;
        // созданные точки
    const pushDot = () => {
        const portfolioDots = document.querySelector('.portfolio-dots');
        for( let i = 0; i < slide.length; i++) {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            if(i === currentSlide){
                dot.classList.add('dot-active');
            }
            portfolioDots.append(dot); 
        }   
    };
    pushDot();

    const dot = document.querySelectorAll('.dot');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    }; 
    slider.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((item, i) => {
                if(item === target) {
                    currentSlide = i;
                }
            });
        }
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', (e) => {
        if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (e) => {
        if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            startSlide();
        }
    });
    startSlide(1500);
};
slider();
//меняет лица при наводке
const toggleFaсe = () => {
    const command = document.querySelector('#command');
    const img = command.querySelectorAll('img');
    img.forEach((elem) => {
        let scr = elem.getAttribute('src');
        elem.addEventListener('mousemove', (e) => {
            e.target.src = e.target.dataset.img;
        });
        elem.addEventListener('mouseout', (e) => {
            e.target.src = scr;
        });
    });
};
toggleFaсe();
//калькуляторблокировка
const calcСheck = () => {
    const calcBlokc = document.querySelector('.calc-block');
    const calcItem = calcBlokc.querySelectorAll('input');
    for(let i = 0; i < calcItem.length; i++){
        calcItem[i]/addEventListener('input', () => {
            if(i === 1){
                calcItem[i].setAttribute('maxlength', '1'); 
                calcItem[i].value = calcItem[i].value.replace(/\D/gi, '');
            } else {
                calcItem[i].setAttribute('maxlength', '3');
                calcItem[i].value = calcItem[i].value.replace(/\D/gi, '');
            }
        })
    }
};
calcСheck();
//калькулятор
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');
    let n = 0;
    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1; 
        const typeValue = calcType.options[calcType.selectedIndex].value,
             squareValue = +calcSquare.value;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }
         if(calcDay.value < 5 && calcDay.value > 0){
            dayValue *= 2;
         } else if (calcDay.value < 10 && calcDay.value > 0){
            dayValue *= 1.5;
         } else  if(calcDay.value > 11){
            dayValue *= 1;
         }
        if(typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            let interval = setInterval(() => { 
                n += 100;
                if(total <= n) {
                    clearInterval(interval);
                }
                totalValue.textContent = n;
            }, 0.1);
        } 
    };
    
        calcBlock.addEventListener('change', (e) => {
            const target = e.target;
            if(target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                totalValue.textContent = 0;
                
                countSum();
            }
        });

};
calc(100);
// send-ajax-form
const sendForm = () => {
    const errorMessege = 'Что то пошло не так',
        loadMessege  = 'Загрузка...',
        successMessege = "Спасибо! Мы с вами скоро свзжимся";

    const form = document.getElementById('form1'),
        formInput = form.querySelectorAll('input'),
        form2 = document.getElementById('form2'),
        formInput2 = form2.querySelectorAll('input'),
        form3 = document.getElementById('form3'),
        formInput3 = form3.querySelectorAll('input'),       
        formPhone = document.querySelectorAll('.form-phone'),
        formName = document.querySelectorAll('.form-name'),
        formEmail = document.querySelectorAll('.form-email'),
        topForm = form2.querySelector('.top-form'),
        form2Mess = form2.querySelector('.mess');


    formPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9+]/gi, '');
        })
    });
    formName.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s]/gi, '');
        })
    })
    formEmail.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/ /g, '');
        })
    })
        
    topForm.addEventListener('input', () => {
        topForm.value = topForm.value.replace(/[^а-я\s]/gi, '');
    });
    form2Mess.addEventListener('input', () => {
        form2Mess.value = form2Mess.value.replace(/[^а-я\s]/gi, '');
    });

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;'
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form);
        let body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then()
            .catch()
        formInput.forEach(item => {
            item.value ='';
        })
    })
    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        form2.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form2);
        let body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then()
            .catch()
        formInput2.forEach(item => {
            item.value = '';
        })
    })
    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        form3.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form3);
        let body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then()
            .catch()
          
        formInput3.forEach(item => {
            item.value = '';
        })
    })
    
        const postData = (body) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {  
                    if(request.readyState !== 4) {
                        return;
                    }
                    if(request.status === 200) {
                        resolve(statusMessage.textContent = successMessege);           
                    } else {
                        reject(statusMessage.textContent = errorMessege); 
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(JSON.stringify(body));
            })
        }
        

}
sendForm();

























});