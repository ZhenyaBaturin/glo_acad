'use strict';
// lesson 1, 2, 08.02.2020
const money = +prompt("Ваш месячный доход?", "70000");
const income = 'Фриланс';
const addExpreses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
const deposit = confirm("Есть ли у вас депозит в банке?");
const mission = 500000; 
const period = 12;

const expenses1 = prompt ("Введите обязательную статью расходов?");
const amount1 = +prompt ("Во сколько это обойдется?");
const expenses2 = prompt ("Введите обязательную статью расходов?");
const amount2 = +prompt ("Во сколько это обойдется?");
const budgetMonth = money - amount1 - amount2;

// alert(money);
// console.log(income);

// lesson 2
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpreses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpreses.toLowerCase().split(', '));
const budgetDay = Math.round(budgetMonth / 30);


// lesson 3
console.log(`Бютжет на месяц ${budgetMonth} рублей`);
console.log(`Сколько месяцев требуется для достижении цели: ${Math.ceil(mission/budgetMonth)} месяцев`);
console.log(`Бютжет на день: ${budgetDay}`);
if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
} else if (600 >= budgetDay <= 1200) {
    console.log("У вас средний уровень дохода");
} else if (budgetDay < 600) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
    console.log("Что-то пошло не так");
}


