'use strict';

const start = document.getElementById('start'),
   incomeAdd = document.getElementsByTagName('button')[0],
   expensesAdd = document.getElementsByTagName('button')[1],
   additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
   budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
   budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
   expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
   additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
   additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
   incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
   targetMonthValue = document.getElementsByClassName('target_month-value')[0],
   salaryAmount = document.querySelector('.salary-amount'),
   incomeTitle = document.querySelector('input.income-title'),
   expensesTitle = document.querySelector('input.expenses-title'),
   additionalExpensesItem = document.querySelector('.additional_expenses-item'),
   targetAmount = document.querySelector('.target-amount'),
   periodSelect = document.querySelector('.period-select'),
   periodAmount = document.querySelector('.period-amount'),
   incomeAmount = document.querySelector('.income-amount'),
   expensesAmount = document.querySelector('.expenses-amount'),
   data = document.querySelector('.data'),
   cancel = document.querySelector('#cancel'),
   inputData = data.querySelectorAll('input[type="text"]'),
   inputs = document.querySelectorAll('input'),
   btnPlus = document.querySelectorAll('.btn_plus'),
   depositCheck = document.querySelector('#deposit-check'),
   depositBank = document.querySelector('.deposit-bank'),
   depositAmount = document.querySelector('.deposit-amount'),
   depositPercent = document.querySelector('.deposit-percent');

let money,
   expensesItems = document.querySelectorAll('.expenses-items'),
   incomeItems = document.querySelectorAll('.income-items'),
   inputText = document.querySelectorAll('input[placeholder="Наименование"]'),
   inputNumber = document.querySelectorAll('input[placeholder="Сумма"]');
class AppData {
   constructor() {
      this.income = {};
      this.incomeMonth = 0;
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.percentDeposit = 0;
      this.moneyDeposit = 0;
      this.budget =0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
   }  
   start() {
      this.getSalaryAmount();
      this.getExpInc();
      this.getExpensesMonth();
      this.getIncomeMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getInfoDeposit();
      this.getBudget();
      this.showResult();
      this.elemState();
   }
   showResult() {
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcSaveMoney();
      periodSelect.addEventListener('input', (e) => {
         incomePeriodValue.value = this.budgetMonth * e.target.value;
      });
   }
   getSalaryAmount() {
      this.budget = +salaryAmount.value;
   }
   addExpIncBlock(element, btn, selector) {
      let cloneElemItem = element[0].cloneNode(true); // div
      element[0].parentNode.insertBefore(cloneElemItem, btn);// вставляем div перед кнопкой
      let i = cloneElemItem.querySelectorAll('input');
      i.forEach(item => {   // делаем перебор инпутов в диве
         item.value = '';
         this.regNumber(item);
         this.regString(item);
      });
      // получаем дивы с инпутами
      element = document.querySelectorAll(selector); // получаем все элементы

      if(element.length === 3) {
         btn.style.display = 'none';
      }
   }
   getExpInc() {
      incomeItems = document.querySelectorAll('.income-items');
      expensesItems = document.querySelectorAll('.expenses-items');

      const count = item => {
         const startStr = item.className.split('-')[0];
         const itemTitle = item.querySelector(`.${startStr}-title`).value;
         const itemAmount = item.querySelector(`.${startStr}-amount`).value;
         if (itemTitle !== '' && itemAmount !== '') {
            this[startStr][itemTitle] = +itemAmount;
         }
      };
      incomeItems.forEach(count);
      expensesItems.forEach(count);
   }
   getAddExpenses() {
      let addExpenses = additionalExpensesItem.value.split(', ');
      addExpenses.forEach(item => {
         item =item.trim();
         if (item !== '') {
            this.addExpenses.push(item);
            this.addExpenses = this.addExpenses.map(n => `${n[0].toUpperCase()}${n.substring(1).toLowerCase()}`);
         }
      });
   }
   getAddIncome() {
      additionalIncomeItem.forEach(item => {
         let itemValue = item.value.trim();
         if (itemValue !== '') {
            this.addIncome.push(itemValue);
            this.addIncome = this.addIncome.map(n => `${n[0].toUpperCase()}${n.substring(1).toLowerCase()}`);
         }
      });
   }
   getExpensesMonth() {
      for(let key in this.expenses) {
         this.expensesMonth += this.expenses[key];
      }
   }
   getIncomeMonth() {
      for(let key in this.income) {
         this.incomeMonth += this.income[key];
      }
   }
   getPeriodSelect() {
      periodAmount.textContent = this.value;
   }
   getBudget() {
      const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
   } 
   getTargetMonth() {
      return Math.ceil(+targetAmount.value / this.budgetMonth);
   }
   calcSaveMoney() {
      return this.budgetMonth * +periodSelect.value;
   }
   getStart() {
      salaryAmount.addEventListener('input',() => {
         if (salaryAmount.value !== '') {
            start.disabled = false;
         } else {
            start.disabled = true;
         }
      });
   }
   regString() {
      inputText.forEach(item => {
         item.addEventListener('input', (e) => {
            const target = e.target;
            target.value = target.value.replace(/[^А-Яа-я,._ ]/, '');
         });
      });
      inputText = document.querySelectorAll('input[placeholder="Наименование"]');
   }
   regNumber() {
      inputNumber.forEach(item => {
         item.addEventListener('input', (e) => {
            const target = e.target;
            target.value = target.value.replace(/[^\d|,|.]+/g, '');
         });
      });
      inputNumber = document.querySelectorAll('input[placeholder="Сумма"]');
   }
   elemState() {
      start.style.display = 'none';
      cancel.style.display = 'block';
      const inputData = data.querySelectorAll('input[type="text"]');
      inputData.forEach(item => item.disabled = true);
      btnPlus.forEach(item => item.disabled = true);
      depositCheck.disabled = true;
      depositBank.disabled = true;
      depositAmount.disabled = true;
      start.disabled = true;
   }
   reset() {
      const _this = this.value;
      const incomItems = data.querySelectorAll('.income-items'),
         expensesItems = document.querySelectorAll('.expenses-items'),
         inputData = data.querySelectorAll('input[type="text"]'),
         inputs = document.querySelectorAll('input');
      start.style.display = 'block';
      cancel.style.display = 'none';
      inputs.forEach(item => {
         item.value = '';
         item.type === 'checkbox' ? item.checked = false : '';
      });
      inputData.forEach((item) =>item.disabled = false);

      const resetItems = (elem, btn) => {
         elem.forEach((item, i) => {
            if ( item > 1 || i !== 0) {
               item.remove();
               btn.style.display = 'block';
            } 
         });
      };
      resetItems(incomItems, incomeAdd);
      resetItems(expensesItems, expensesAdd);
      
      btnPlus.forEach(item => item.disabled = false);
      periodSelect.value = 1;
      periodAmount.textContent = periodSelect.value;
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositCheck.disabled = false;
      depositBank.disabled = false;
      depositAmount.disabled = false;
      depositBank.selectedIndex = 'Процент';

      this.income = {};
      this.incomeMonth = 0;
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.procentDeposit = 0;
      this.moneyDeposit = 0;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
   }
   init() {
      this.regNumber();
      this.regString();
      this.getStart();
      start.disabled = true;
   }
   getInfoDeposit() {
      if (this.deposit) {
         this.percentDeposit = +depositPercent.value;
         this.moneyDeposit = +depositAmount.value;
      }
   }
   changePercent() {
      const valueSelect = this.value;
      if (valueSelect === 'other') {
         depositPercent.style.display = 'inline-block';
         depositPercent.value = '';
         start.disabled = true;
         depositPercent.addEventListener('input', (e) => {
            const target = e.target;
            target.value = target.value.replace (/[^\d|,|.]+/g, '');
            if(target.value < 0 || target.value > 100) {
               target.value = '';
               alert ('Введите корректное значение в поле проценты');
               start.disabled = true;
            } else {
               if (salaryAmount.value !== '' && depositPercent.value !== '' ) {
                  
                  start.disabled = false;
               } else {
                  start.disabled = true;
               }
            }
         });
      } else {
         depositPercent.value = valueSelect;
         depositPercent.style.display = 'none';
      }
   }
   depositHandler() {
      if(depositCheck.checked) {
         depositBank.style.display = 'inline-block';
         depositAmount.style.display = 'inline-block';
         this.deposit = true;
         depositBank.addEventListener('change', this.changePercent);
      } else {
         depositBank.style.display = 'none';
         depositAmount.style.display = 'none';
         depositPercent.style.display = 'none';
         depositBank.value = '';
         depositAmount.value = '';
         depositPercent.value = '';
         this.deposit = false;
         start.disabled = false;
         depositBank.removeEventListener('change', this.changePercent);
      }
   }
   eventsListeners() {
      this.init();
      start.addEventListener('click', this.start.bind(this));
      cancel.addEventListener('click', this.reset.bind(this));
      depositCheck.addEventListener('change', this.depositHandler.bind(this));
      expensesAdd.addEventListener('click', () => this.addExpIncBlock(expensesItems, expensesAdd, '.expenses-items'));
      incomeAdd.addEventListener('click', () => this.addExpIncBlock(incomeItems, incomeAdd, '.income-items'));
      periodSelect.addEventListener('input', this.getPeriodSelect);
   }
}
const app = new AppData();
app.eventsListeners();



