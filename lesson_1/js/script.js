'use strict';

const start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
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
    periodAmount = document.querySelector('.period-amount'),
    formElem = document.querySelectorAll('[type=text] ');
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addInCome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.mission = 500000;
    this.budget = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
    this.expensesMonth = 0;
};

AppData.prototype.start = function () {
    formElem = document.querySelectorAll('[type=text] ');
    this.blockElem();
    this.hideStart();
    this.budget = +salaryAmount.value;
    this.getInfoDeposit();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getAccumulatedMonth();
    this.getAddExpenses();
    this.showResult();
    
};

AppData.prototype.cancel = function() {
    formElem = document.querySelectorAll('[type=text] ');
    this.clearElem();
    this.showStart();
};

AppData.prototype.showResult =function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addInCome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSaveMoney();
    periodSelect.addEventListener('input', () => {
        incomePeriodValue.value = this.calcSaveMoney();
    });
};
AppData.prototype.addExpresesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach(item => {

        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        
        if(itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getAddExpenses = function() {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== '') {
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    additionalIncomeValue.value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function(){
    let incomeTitle = document.querySelector('.income-title').value;
    let incomeAmount = document.querySelector('.income-amount').value;
    if(incomeTitle !== '' && incomeAmount !== '') {
        this.income[incomeTitle] = incomeAmount;
    }
    for(let key in this.income){
        this.incomeMonth += +this.income[key];
    }
};
AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addInCome.push(itemValue);
        }
    });
};

AppData.prototype.getExpensesMonth = function() {
    for(let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
        console.log(this.expenses[key]);
    }
};
AppData.prototype.getAccumulatedMonth = function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    if (this.budgetMonth < 0) {
        this.budgetDay = 0;
    }
    this.budgetDay = Math.round(this.budgetMonth / 30); 
};
AppData.prototype.getTargetMonth = function() {
    // if (!isNumber(Math.ceil(targetAmount.value / Accum)) || Math.ceil(targetAmount.value / Accum) < 0) {
    //     return "Цель не будет достигнута";
    // } else {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    // }
};
AppData.prototype.getStatusIncome = function(){
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
};
AppData.prototype.getInfoDeposit = function() {
    if(this.deposit){
        this.percentDeposit = prompt('Какой годовой процент?', '10');
        this.moneyDeposit = prompt('Какая сумма заложена?', '5000');
    }
};
AppData.prototype.calcSaveMoney = function() {
    return this.budgetMonth * periodSelect.value;   
};

AppData.prototype.blockElem = function() {
    formElem.forEach(item => {
        item.disabled = true;
    });
};

AppData.prototype.clearElem = function() {
    formElem.forEach(item => {
        item.disabled = false;
        item.value = '';
    });
};

AppData.prototype.hideStart = function(){
    start.style.display = 'none';
    cancel.style.display = 'block';
};
AppData.prototype.showStart = function() {
    start.style.display = 'block';
    cancel.style.display = 'none';
};
AppData.prototype.eventsListeners = function () {
    const _this = this;
    start.addEventListener('click', () => {
        if(salaryAmount.value === '') {
            alert('Ошибка, необходимо заполнить месячный доход');
            
        } else if(!isNumber(salaryAmount.value)) {
            alert('Ошибка, введите правильно значение!');
        } else {
            _this.start();
        }
        
    });
    
    cancel.addEventListener('click', () => {
        _this.cancel();
    });
    expensesPlus.addEventListener('click', _this.addExpresesBlock);
    incomePlus.addEventListener('click', _this.addIncomeBlock);
    periodSelect.addEventListener('input', () => {
        periodAmount.textContent = periodSelect.value;
    });
}



const appData = new AppData();
appData.eventsListeners();



console.log(appData);


// let triggerFun = appData.start.bind(appData);




// let arr = [];
// appData.addExpenses.forEach((item, i) => {
//     arr = item[0].toUpperCase() + item.substr(1); 
// });
// console.log(...arr); 
// console.log(arr); 

// lesson 8
let newArray = appData.addExpenses.map(item => item[0].toUpperCase() +  item.substr(1));
