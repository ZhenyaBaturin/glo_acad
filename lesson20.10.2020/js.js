'use strict';

const h1 = document.querySelector('h1'),
    buttonRecord = document.querySelector('.button-record'),
    buttonAuthorization = document.querySelector('.button-authorization'),
    divUser = document.querySelector('.user');
let userName = [];
let count = 0;
let user = [];

const getName = () => {
    let name = prompt('Введите через пробел имя и фамилию пользователя');
    if(name) {
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
        return true
    } else {
        return false
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
const date = new Date();
const getNowDate = () => {
    
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return `${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()} г., ${new Date().toLocaleTimeString()}`;
};

const showCotent = () => {
    divUser.textContent = '';
    user.forEach((item, i) => {
        let div = document.createElement('div');
        div.classList.add('block');
        if(item.lastName === undefined){
            div.innerHTML = `
        <span>Имя: ${item.firstname}, фамилия отсутсвует, зарегистрирован: ${item.regDate}</span>
        <div class="btn">&#10007</div>
        `;
        } else {
            div.innerHTML = `
        <span>Имя: ${item.firstname}, фамилия ${item.lastName}, зарегистрирован: ${item.regDate}</span>
        <div class="btn">&#10007</div>
        `;
        }
        
        divUser.append(div);
        
        const btnClose = divUser.querySelectorAll('.btn')[i];
        btnClose.addEventListener('click', () => {
            delete user[i];
            showCotent();
        })
    });    
    let json = JSON.stringify(user);
    localStorage.myText = json;

};


buttonRecord.addEventListener('click', () => {
    if(getName()){
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
    }
        
    
    
});
if (localStorage.myText){
    user = JSON.parse(localStorage.myText); 
    user = user.filter((x) => {
    return x !== undefined && x !== null;
    });
}
    

    


showCotent();

const loginUser = () => {
    let flag = false
    let login = prompt('Введите логин');
    let pass = prompt('Введите пароль');
    if(login || pass){
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
    
}
buttonAuthorization.addEventListener('click', () => {
    loginUser();
});
