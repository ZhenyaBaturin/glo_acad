'use strict';

const h1 = document.querySelector('h1'),
    buttonRecord = document.querySelector('.button-record'),
    buttonAuthorization = document.querySelector('.button-authorization');
let userName = [];
let count = 0;


const getName = () => {
    let name = prompt('Введите через пробел имя и фамилию пользователя');
    name = name.trim();
    for(let i = 0; i < name.length; i++) {
        if(name[i] === ' '){
            count++;
        }
    }
    if(count >= 2){
        alert('Вы ввели мног пробелов, введите заново');
        getName();
    } else if(count <= 1){
        userName = name.split(' ');
        count = 0;
    }     
};
const getLogin= () => {
    const login = prompt('Введите логин');
    
};
const getPassword = () => {
    let password = prompt('Введите пароль');
    return 'sdsdfs'
};
new User(...(userName), getPassword);
    console.log(new User(...(userName),  getPassword));
buttonRecord.addEventListener('click', () => {
    getName();
    User.getLogin();
    getPassword();
    console.log(new User(...(userName), getPassword), new Date());
});
