'use strict';

const man = document.querySelector('img'),
    stop = document.querySelector('.button-stop'),
    reset = document.querySelector('.button-reset'),
    start = document.querySelector('.button-start');
let count = 0;
let runInt;
let runningAnim = () => {
    runInt = requestAnimationFrame(runningAnim);
    count = count + 0.1;
    if(count < 95){
        man.style.paddingLeft = `${count}%`;
    } else {
        cancelAnimationFrame(runInt);
    }
};
start.addEventListener('click', () => {
    runInt = requestAnimationFrame(runningAnim);
});
stop.addEventListener('click', () => {
    cancelAnimationFrame(runInt);
});
reset.addEventListener('click', () => {
    count = 0;
    cancelAnimationFrame(runInt);
    man.style.paddingLeft = `${count}%`;
});

