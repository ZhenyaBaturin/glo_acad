'use strict';

const start = document.getElementById('start'),
    buttonPlus = document.getElementsByTagName('button'),
    incomePlus = buttonPlus[0],
    expensesPlus = buttonPlus[1],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'), 
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItem = document.querySelectorAll('.income-itemd');
let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount');
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};



let appData = {
    income: {},
    incomeMonth: 0,
    addInCome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    start: function () {
        appData.budget = +salaryAmount.value;
        appData.getInfoDeposit();
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddIncome();
        appData.getAccumulatedMonth();
        appData.getAddExpenses();
        appData.showResult();
    },
    showResult:function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addInCome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcSaveMoney();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = appData.calcSaveMoney();
        });
    },
    addExpresesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(item => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getIncome: function(){
        let incomeTitle = document.querySelector('.income-title').value;
        let incomeAmount = document.querySelector('.income-amount').value;
        if(incomeTitle !== '' && incomeAmount !== '') {
            appData.income[incomeTitle] = incomeAmount;
        }
        for(let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
               appData.addInCome.push(itemValue);
            }
        });
    },
    budget: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for(let key in appData.expenses) {
            appData.expensesMonth += +this.expenses[key];
            console.log(this.expenses[key]);
        }
    },
    getAccumulatedMonth: function() {
        appData.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        if (appData.budgetMonth < 0) {
            appData.budgetDay = 0;
        }
        appData.budgetDay = Math.round(this.budgetMonth / 30); 
    },
    getTargetMonth: function() {
        // if (!isNumber(Math.ceil(targetAmount.value / Accum)) || Math.ceil(targetAmount.value / Accum) < 0) {
        //     return "Цель не будет достигнута";
        // } else {
            return Math.ceil(targetAmount.value / appData.budgetMonth);
        // }
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
        return this.budgetMonth * periodSelect.value;   
    }
};


start.addEventListener('click', () => {
    if(salaryAmount.value === '') {
        alert('Ошибка, необходимо заполнить месячный доход');
    }
    appData.start();
});
expensesPlus.addEventListener('click', appData.addExpresesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', () => {
    periodAmount.textContent = periodSelect.value;
});



// let arr = [];
// appData.addExpenses.forEach((item, i) => {
//     arr = item[0].toUpperCase() + item.substr(1); 
// });
// console.log(...arr); 
// console.log(arr); 

// lesson 8
let newArray = appData.addExpenses.map(item => item[0].toUpperCase() +  item.substr(1));
console.log(newArray); 
console.log(budgetDayValue);