'use strict';
// lesson 1, 2, 08.02.2020
const money = 70000;
const income = '20000';
const addExpreses = 'недвижимость, дипломы, курсовые проекты';
const deposit = true;
const mission = 500000; 
const period = 12;

// alert(money);
// console.log(income);

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpreses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpreses.toLowerCase().split(', '));

const budgetDay = money / 30;
console.log(Math.round(budgetDay));
