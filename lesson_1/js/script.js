'use strict';
// lesson 1, 2, 08.02.2020
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let start = function() {
    do {
        money = prompt("Ваш месячный доход?");
    } while (!isNumber(money)) ;
};
start();

let appData = {
    income: {},
    addInCome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 3,
    asking: function() {
        let addExpreses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses = addExpreses.toLowerCase().split(', ');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
                var sum = 0;
            for (let i = 0; i < 2; i++) {
                let x = prompt ("Введите обязательную статью расходов?");
                sum = +prompt ("Во сколько это обойдется?"); 
                appData.expenses[x] = sum;
                while(!isNumber(sum)){
                    sum = +prompt ("Во сколько это обойдется?"); 
                }
            }
            // return sum;
    },
    budget: money,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,

    getExpensesMonth: function() {
        for(let key in appData.expenses) {
            this.expensesMonth += this.expenses[key];
        }
    },

    getAccumulatedMonth: function() {
        appData.budgetMonth = this.budget - this.expensesMonth;
        if (appData.budgetMonth < 0) {
            appData.budgetDay = 0;
        }
        appData.budgetDay = Math.round(this.budgetMonth / 30); 
    },

    getTargetMonth: function(Accum) {
        if (!isNumber(Math.ceil(appData.mission / Accum)) || Math.ceil(appData.mission / Accum) < 0) {
            return "Цель не будет достигнута";
        } else {
            return Math.ceil(appData.mission / Accum);
        }
    },

    getStatusIncome: function(){
        if (this.budgetDay > 1200) {
            return("У вас высокий уровень дохода");
        } else if (600 <= this.budgetDay  && this.budgetDay <= 1200) {
            return("У вас средний уровень дохода");
        } else if (this.budgetDay < 600 && this.budgetDay > 0) {
            return("К сожалению у вас уровень дохода ниже среднего");
        } else if (this.budgetDay <= 0) {
            return ("Вы в минусе");
        } else {
            return("Что-то пошло не так");
        }
    }
};

appData.asking();
appData.getAccumulatedMonth();
appData.getExpensesMonth();

for(let key in appData){
    console.log(`В объекте ${appData} присутствует ${key}`);
}


console.log(`Расходы за месяц ${appData.expensesMonth}`);
console.log(`Цель будет достигнута за ${appData.getTargetMonth(appData.budgetMonth)} месяца(-ов)`);
console.log(appData.getStatusIncome());

