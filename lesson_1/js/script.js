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

// alert(money);
// console.log(income);

// lesson 2

// let showTypeOf = (data) => {
//     console.log(typeof(data));
// }
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);

// console.log(addExpreses.length);
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${mission} рублей`);
// console.log(addExpreses.toLowerCase().split(', '));
// const budgetDay = Math.round(getAccumulatedMonth() / 30);


// // lesson 3
// console.log(`Бютжет на месяц ${getAccumulatedMonth()} рублей`);
// console.log(`Сколько месяцев требуется для достижении цели: ${Math.ceil(mission/getAccumulatedMonth())} месяцев`);
// console.log(`Бютжет на день: ${budgetDay}`);

// let getStatusIncome = () => {
//     if (budgetDay > 1200) {
//         return("У вас высокий уровень дохода");
//     } else if (600 >= budgetDay <= 1200) {
//         return("У вас средний уровень дохода");
//     } else if (budgetDay < 600) {
//         return("К сожалению у вас уровень дохода ниже среднего");
//     } else {
//         return("Что-то пошло не так");
//     }
// };
// console.log(getStatusIncome());


// lesson 4

let showTypeOf = (data) => {
    console.log(typeof(data));
};

let getExpensesMonth =  () => {
    return amount1 + amount2;
};

function getAccumulatedMonth () {
    return money - amount1 - amount2;
}

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = (Accum) => {
    return Math.ceil(mission / Accum);
};

let budgetDay = Math.round(accumulatedMonth / 30);
if (accumulatedMonth < 0) {
    budgetDay = 0;
}
let getStatusIncome = () => {
    if (budgetDay > 1200) {
        return("У вас высокий уровень дохода");
    } else if (600 >= budgetDay <= 1200) {
        return("У вас средний уровень дохода");
    } else if (budgetDay < 600) {
        return("К сожалению у вас уровень дохода ниже среднего");
    } else {
        return("Что-то пошло не так");
    }
};



showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(getExpensesMonth());
console.log(addExpreses.toLowerCase().split(', '));
console.log(`${getTargetMonth(accumulatedMonth)} месяца(-ов)`);
console.log(getStatusIncome());

