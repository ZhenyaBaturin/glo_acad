'use strict';
// lesson 1, 2, 08.02.2020
let money;
const income = 'Фриланс';
const addExpreses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
const deposit = confirm("Есть ли у вас депозит в банке?");
const mission = 500000; 
const period = 12;

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// lesson 4, 5

let start = function() {
    // money = prompt("Ваш месячный доход?");
    do {
        money = prompt("Ваш месячный доход?");
    } while (!isNumber(money)) ;
};
start();

let showTypeOf = (data) => {
    console.log(typeof(data));
};

let expenses = [];

let getExpensesMonth =  () => {
    let sum = 0;
    for (let i =0; i < 2; i++) {
        expenses[i] = prompt ("Введите обязательную статью расходов?");
        sum += +prompt ("Во сколько это обойдется?"); 
        while(!isNumber(sum)){
            sum = +prompt ("Во сколько это обойдется?"); 
        }
    }
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function () {
    return money - expensesAmount;
};


let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = (Accum) => {
    if (!isNumber(Math.ceil(mission / Accum)) || Math.ceil(mission / Accum) < 0) {
        return "Цель не будет достигнута";
    } else {
        return Math.ceil(mission / Accum);
    }
};

let budgetDay = Math.round(accumulatedMonth / 30);
if (accumulatedMonth < 0) {
    budgetDay = 0;
}
let getStatusIncome = () => {
    if (budgetDay > 1200) {
        return("У вас высокий уровень дохода");
    } else if (600 <= budgetDay  && budgetDay <= 1200) {
        return("У вас средний уровень дохода");
    } else if (budgetDay < 600 && budgetDay > 0) {
        return("К сожалению у вас уровень дохода ниже среднего");
    } else if (budgetDay <= 0) {
        return ("Вы в минусе");
    } else {
        return("Что-то пошло не так");
    }
};



showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(`Ваши расходы: ${expensesAmount}`);
console.log(budgetDay);
console.log(addExpreses.toLowerCase().split(', '));
console.log(`${getTargetMonth(accumulatedMonth)} месяца(-ов)`);
console.log(getStatusIncome());

