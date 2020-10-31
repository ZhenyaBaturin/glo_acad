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
    incomeItem = document.querySelectorAll('.income-itemd'),
    periodAmount = document.querySelector('.period-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
let formElem = document.querySelectorAll('[type=text] '),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items');
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let count = 1,
    count2 = 1;

class AppData {
    constructor() {
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
    }

cancel(){
    formElem = document.querySelectorAll('[type=text] ');
    this.clearElem();
    this.showStart();
    checkbox.checked= false;
    this.depositHandler();
}
start() {
    formElem = document.querySelectorAll('[type=text] ');
    this.blockElem();
    this.hideStart();
    this.budget = +salaryAmount.value;
    this.getInfoDeposit();
    this.getExpIns();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getAccumulatedMonth();
    this.getAddExpenses();
    this.showResult();
}
    
    
showResult() {
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
}

addExpresesBlock () {
    let div = document.createElement('div');
    div.classList.add('.expenses-items');
    div.innerHTML = `
        <input type="text" class="expenses-title" placeholder="Наименование">
        <input type="text" class="expenses-amount" placeholder="Сумма">
    `;
    expensesPlus.before(div);
    expensesItems = document.querySelectorAll('.expenses-items');
    count2 += 1;
    console.log(count);
    if(count2 === 3) {
        expensesPlus.style.display = 'none'; 
    }
}

getAddExpenses () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== '') {
            _this.addExpenses.push(item);
        }
    });
}

addIncomeBlock (){
  
    let div = document.createElement('div');
    div.classList.add('.income-items');
    div.innerHTML = `
    <input type="text" class="income-title" placeholder="Наименование">
    <input type="text" class="income-amount" placeholder="Сумма">
    `;
    incomePlus.before(div);
    incomeItems = document.querySelectorAll('.income-items');
    count += 1;
    if(count === 3) {
        incomePlus.style.display = 'none'; 
    }

}

getAddIncome (){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addInCome.push(itemValue);
        }
    });
}

getExpIns () {
    const count = item => {
        const startStr = item.className.split('-')[0];
        console.log(startStr);
        const itemTitle = document.querySelector(`.${startStr}-title`).value;
        const itenAmount = document.querySelector(`.${startStr}-amount`).value;
        if(itemTitle !== '' && itenAmount !== '') {
            this[startStr][itemTitle] = itenAmount;
        }
    };
        incomeItems.forEach(count);
        expensesItems.forEach(count);
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    }

getExpensesMonth () {
        for(let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
            console.log(this.expenses[key]);
        }
    }


getAccumulatedMonth () {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    if (this.budgetMonth < 0) {
        this.budgetDay = 0;
    }
    this.budgetDay = Math.round(this.budgetMonth / 30); 
}

getTargetMonth () {
        // if (!isNumber(Math.ceil(targetAmount.value / Accum)) || Math.ceil(targetAmount.value / Accum) < 0) {
        //     return "Цель не будет достигнута";
        // } else {
        return Math.ceil(targetAmount.value / this.budgetMonth);
        // }
}

getStatusIncome (){
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

getInfoDeposit () {
    if(this.deposit){
            
        if(depositPercent.value.trim () === '' || !isNumber(depositPercent.value)){
            alert('Вы ввели некорректные данные для депозита');
        } else {
            this.percentDeposit = depositPercent.value;
        } 
        this.moneyDeposit = depositAmount.value;
    }
}


calcSaveMoney () {
    return this.budgetMonth * periodSelect.value;   
}
    
 blockElem () {
    formElem.forEach(item => {
        item.disabled = true;
    });
}
    
clearElem () {
    formElem.forEach(item => {
        item.disabled = false;
        item.value = '';
    });
}
    
hideStart(){
    start.style.display = 'none';
    cancel.style.display = 'block';
}
showStart () {
    start.style.display = 'block';
    cancel.style.display = 'none';
}
    
changePercent () {
    const valueSelect = this.value;
    if(valueSelect === 'other') {
        depositPercent.value = '';
        depositPercent.style.display = 'inline-block';
            
    } else {
        depositPercent.style.display = 'none';
        depositPercent.value = valueSelect;
    }
    
}
    
depositHandler () {
    if(checkbox.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = true;
        depositBank.addEventListener('change', this.changePercent);
    }else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositBank.value = '';
        depositAmount.value = '';
        this.deposit = false;
        depositBank.removeEventListener('change', this.changePercent);
    }
}

eventsListeners  () {
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
    checkbox.addEventListener('change', this.depositHandler.bind(this));
        
}
}

const appData = new AppData();
appData.eventsListeners();







































// let triggerFun = appData.start.bind(appData);




// let arr = [];
// appData.addExpenses.forEach((item, i) => {
//     arr = item[0].toUpperCase() + item.substr(1); 
// });
// console.log(...arr); 
// console.log(arr); 

// lesson 8
let newArray = appData.addExpenses.map(item => item[0].toUpperCase() +  item.substr(1));
