'use strict';
const input = document.querySelector('.input-search'),
    text = document.querySelector('.text-p');
    const debounce = (fun, ms) => {
        let timeout;
        return function() {
            const time = () => {fun.apply(this, arguments);};
            clearTimeout(timeout);
            timeout = setTimeout(time, ms);
        };   
    };    
let getText = () => {
    text.textContent = input.value;
};
getText = debounce(getText, 300);
input.addEventListener('keyup', getText);
