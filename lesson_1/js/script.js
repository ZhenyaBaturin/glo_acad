'use strict';

const start = document.getElementById('start'),
    buttonPlus = document.getElementsByTagName('button'),
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value'),
    expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 3,
    asking: function() {
        let extraIncome = confirm('Есть ли у вас дополнительный заработок?');
        if(extraIncome) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Недвижимость');
            while(isNumber(itemIncome)){
                itemIncome = prompt('Какой у вас дополнительный заработок?');
            }
            let cashIncome = +prompt('Сколько в месяц зарабатываете на этом?', '10000');
            while(!isNumber(cashIncome)){
                cashIncome = prompt('Сколько в месяц зарабатываете на этом?', '10000');
            }
            appData.income[itemIncome] = cashIncome;
        }
           

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
    },
    getInfoDeposit: function() {
        if(this.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            appData.moneyDeposit = prompt('Какая сумма заложена?', '5000');
        }
    },
    calcSaveMoney: function() {
        return this.budgetMonth * this.period;
        
    }
};

appData.asking();
appData.getAccumulatedMonth();
appData.getExpensesMonth();
appData.getInfoDeposit();

for(let key in appData){
    console.log(`В объекте ${appData} присутствует ${key}`);
}


console.log(`Расходы за месяц ${appData.expensesMonth}`);
console.log(`Цель будет достигнута за ${appData.getTargetMonth(appData.budgetMonth)} месяца(-ов)`);
console.log(appData.getStatusIncome());
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney());

// let arr = [];
// appData.addExpenses.forEach((item, i) => {
//     arr = item[0].toUpperCase() + item.substr(1); 
// });
// console.log(...arr); 
// console.log(arr); 

// lesson 8
let newArray = appData.addExpenses.map(item => item[0].toUpperCase() +  item.substr(1));
console.log(newArray); 