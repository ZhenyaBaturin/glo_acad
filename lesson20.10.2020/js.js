'use strict';

const h1 = document.querySelector('h1'),
    buttonRecord = document.querySelector('.button-record'),
    buttonAuthorization = document.querySelector('.button-authorization');
    
let userName = [];
let count = 0;
let user = [];

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
        count = 0;
    } else if(count <= 1){
        userName = name.split(' ');
        count = 0;
    }     
};

const getLogin= () => {
    const login = prompt('Введите логин');
    return login;
};

const getPassword = () => {
    let password = prompt('Введите пароль');
    return password;
};

const getNowDate = () => {
    const date = new Date();
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return `${date.getDay()} ${month[date.getMonth()]} ${date.getFullYear()} г., ${new Date().toLocaleTimeString()}`;
};

const showCotent = () => {
    const divUser = document.querySelector('.user');
    divUser.textContent = '';

    user.forEach((item, i) => {
        let div = document.createElement('div');
        div.className = 'block';
        divUser.append(div);
        div.innerHTML = `Имя: ${item.firstname}, фамилия ${item.lastName}, зарегистрирован: ${item.regDate}
        <div class="btn">&#10007</div>`;
        const btnClose = document.querySelector('.btn');
        btnClose.addEventListener('click', () => {
            // delete user[i];
            // showCotent();
            console.log(item);
        })
    });    
    let json = JSON.stringify(user);
    localStorage.myText = json;

};

buttonRecord.addEventListener('click', () => {
    getName();
    const newObj = {
        firstname: userName[0],
        lastName: userName[1],
        login: getLogin(),
        password: getPassword(),
        regDate: getNowDate() 
    };
    
    user.unshift(newObj);
    showCotent();
    userName = [];
    
});
user = JSON.parse(localStorage.myText); 
user = user.filter((x) => {
return x !== undefined && x !== null;
});
showCotent();

const loginUser = () => {
    let flag = false
    let login = prompt('Введите логин');
    let pass = prompt('Введите пароль');
    user.forEach((item) => {
        if(login === item.login && pass === item.password){
            const h1 = document.querySelector('h1');
            h1.innerHTML = `Привет ${item.firstname}`;
            flag = true
        } 
    })
    if(!flag){
        alert('Логин или пароль не верный!');
    }
}
buttonAuthorization.addEventListener('click', () => {
    loginUser();
});
