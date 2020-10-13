'use strict';
// lesson 2
// const num = 266219;
// let count = 1;
// for (let i = 0; i < num.toString().length; i++) {
//     count *= +num.toString()[i];
// }
// console.log(count);
// count = count ** 3;
// alert(count.toString().slice(0, 2));

// lesson3
const lang = prompt('Введите язык', 'ru-eng');
const ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const eng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const namePerson = prompt("Пользователь, введите свое имя на русском языке");
//3.1.a
 if (lang === "ru") {
    console.log(ru[new Date().getDay()]);
} else if (lang === "eng") {
    console.log(eng[new Date().getDay()]);
} else {
    console.log('Что-то пошло не так');
}

// 3.1.b
switch (lang) {
    case 'ru':
        console.log(ru[new Date().getDay()]);
        break;
    case 'eng':
        console.log(eng[new Date().getDay()]);
        break;
    default:
        console.log('Что-то пошло не так');
}

// 3.1.c
const n = [
    ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
];
let count; 
 (lang === "ru") ? count = 0:
 (lang === "eng") ? count = 1 : console.log("Что-то пошло не так");
 
    console.log(n[count][new Date().getDay()]);

// 3.2
(namePerson.toLowerCase() === 'максим') ? console.log("Преподаватель"):
(namePerson.toLowerCase() === 'артем') ? console.log("Директор") : console.log("Студент");