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
   depositAmount = document.querySelector('.deposit-amount'),
   depositPercent = document.querySelector('.deposit-percent'),
   targetAmount = document.querySelector('.target-amount'),
   periodSelect = document.querySelector('.period-select'),
   periodAmount = document.querySelector('.period-amount'),
   incomeAmount = document.querySelector('.income-amount'),
   expensesAmount = document.querySelector('.expenses-amount'),
   data = document.querySelector('.data'),
   cancel = document.querySelector('#cancel'),
   inputData = data.querySelectorAll('input[type="text"]'),
   input = document.querySelectorAll('input[type="text"]'),
   btnPlus = document.querySelectorAll('.btn_plus'),
   depositCheck = document.querySelector('#deposit-check');

let money,
   expensesItems = document.querySelectorAll('.expenses-items'),
   incomeItems = document.querySelectorAll('.income-items'),
   inputText = document.querySelectorAll('input[placeholder="Наименование"]'),
   inputNumber = document.querySelectorAll('input[placeholder="Сумма"]'),
   isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
   };
   
let appData = {
   income: {},
   incomeMonth: 0,
   addIncome: [],
   expenses: {},
   addExpenses: [],
   deposit: false,
   procentDeposit: 0,
   moneyDeposit: 0,
   budget:0,
   budgetDay: 0, // бюджет на день
   budgetMonth: 0, // бюджет на месяц
   expensesMonth: 0, // расходы на месяц
   start: function () {
      this.getSalaryAmount();
      this.getExpenses();
      this.getExpensesMonth();
      this.getIncome();
      this.getIncomeMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.showResult();
   },
   showResult: function() {
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
   },
   getSalaryAmount: function () {
      this.budget = +salaryAmount.value;
   },
   addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true); // div
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);// вставляем div перед кнопкой
      let i = cloneExpensesItem.querySelectorAll('input');
      console.log(this); // кнопка
      i.forEach(item => {   // делаем перебор инпутов в диве
         item.value = '';
         appData.getRegNumber(item);
         appData.getRegString(item);
         
      });
      // получаем дивы с инпутами
      expensesItems = document.querySelectorAll('.expenses-items'); // получаем все элементы
      if(expensesItems.length === 3) {
         this.style.display = 'none';
      }
   },
   getExpenses: function() {
      expensesItems.forEach(item => {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== '' ) {
            this.expenses[itemExpenses] = +cashExpenses;
         }
      });
   },
   addIncomeBlock : function () {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
      let i = cloneIncomeItem.querySelectorAll('input');
      console.log(this); // кнопка
      i.forEach(item => {
         item.value = '';
         appData.getRegNumber(item);
         appData.getRegString(item);
      });
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
         this.style.display = 'none';
      }
   },
   getIncome: function() {
      incomeItems.forEach(item => {
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = item.querySelector('.income-amount').value;
         if(itemIncome !== '' && cashIncome !== '' ) {
            this.income[itemIncome] = +cashIncome;
         }
      });
   },
   getAddExpenses: function() {
      let addExpenses = additionalExpensesItem.value.split(', ');
      addExpenses.forEach(item => {
         item =item.trim();
         if (item !== '') {
            this.addExpenses.push(item);
            this.addExpenses = this.addExpenses.map(n => `${n[0].toUpperCase()}${n.substring(1).toLowerCase()}`);
         }
         
      });
   },
   getAddIncome: function() {
      additionalIncomeItem.forEach(item => {
         let itemValue = item.value.trim();
         if (itemValue !== '') {
            this.addIncome.push(itemValue);
            this.addIncome = this.addIncome.map(n => `${n[0].toUpperCase()}${n.substring(1).toLowerCase()}`);
         }
      });
   },
   getExpensesMonth: function() {
      for(let key in appData.expenses) {
         this.expensesMonth += this.expenses[key];
      }
   },
   getIncomeMonth: function() {
      for(let key in appData.income) {
         this.incomeMonth += this.income[key];
      }
   },
   getPeriodSelect: function () {
      periodAmount.textContent = this.value;
   },
   getBudget: function() {
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
   }, 
   getTargetMonth: function() {
      return Math.ceil(+targetAmount.value / this.budgetMonth);
   },
   // getStatusIncome: function () {
   //    if (appData.budgetDay  > 1200) {
   //       return ('У вас высокий уровень дохода');
   //    } else if (appData.budgetDay  >= 600 && appData.budgetDay <= 1200 ) {
   //       return ('У вас средний уровень дохода');
   //    } else if (appData.budgetDay  >= 0 && appData.budgetDay  < 600 ) {
   //       return ('К сожалению у вас уровень дохода ниже среднего');
   //    }  else if (appData.budgetDay  < 0) {
   //       return ('Что то пошло не так');
   //    }
   // },
   // getInfoDeposit: function() {
   //    if(appData.deposit) {
   //       do {
   //          appData.procentDeposit = +prompt('Какой годовой процент?', '10');
   //       } 
   //       while (!isNumber(appData.procentDeposit) || appData.procentDeposit === 0 || appData.procentDeposit === '');

   //       do {
   //          appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
   //       } 
   //       while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0 || appData.moneyDeposit === '');
   //    }
   // },
   calcSaveMoney: function() {
      return this.budgetMonth * +periodSelect.value;
   },
   getStart: function() {
      start.disabled = true;
      salaryAmount.addEventListener('input',() => {
         if (salaryAmount.value !== '') {
            start.disabled = false;
         } else {
            start.disabled = true;
         }
      });
   },
   getRegString: function() {
      inputText.forEach(item => {
         item.addEventListener('input', (e) => {
            const target = e.target;
            target.value = target.value.replace(/[^А-Яа-я,._ ]/,'');
         });
      });
      inputText = document.querySelectorAll('input[placeholder="Наименование"]');
   },
   getRegNumber: function() {
      inputNumber.forEach(item => {
         item.addEventListener('input', (e) => {
            const target = e.target;
            target.value = target.value.replace(/[^\d|,|.]+/g, "");
         });
      });
      inputNumber = document.querySelectorAll('input[placeholder="Сумма"]');
   },
   getInint() {
      this.getRegNumber();
      this.getRegString();
      this.getStart();
      expensesAdd.addEventListener('click', this.addExpensesBlock);
      incomeAdd.addEventListener('click', this.addIncomeBlock);
      periodSelect.addEventListener('input', this.getPeriodSelect);
   },
   getCalc: function() {
      start.style.display = 'none';
      cancel.style.display = 'block';
      const inputData = data.querySelectorAll('input[type="text"]');
      inputData.forEach(item => item.disabled = true);
      btnPlus.forEach(item => item.disabled = true);
      depositCheck.disabled = true;
      start.disabled = true;
   },
   getReset: function() {
      const incomItems = data.querySelectorAll('.income-items'),
         expensesItems = document.querySelectorAll('.expenses-items'),
         inputData = data.querySelectorAll('input[type="text"]');
      start.style.display = 'block';
      cancel.style.display = 'none';
      input.forEach(item => item.value = '');
      inputData.forEach((item) =>item.disabled = false);
      incomItems.forEach((item, i) => {
         if ( item > 1 || i !== 0) {
            item.remove();
            incomeAdd.style.display = 'block';
         } 
      });
      expensesItems.forEach((item, i) => {
         if ( item > 1 || i !== 0) {
            item.remove();
            expensesAdd.style.display = 'block';
         } 
      });
      btnPlus.forEach(item => item.disabled = false);
      depositCheck.disabled = false;
      periodSelect.value = '1';
      periodAmount.textContent = '1';
   }
};

appData.getInint();
start.addEventListener('click', () => {
   appData.start();
   appData.getCalc();
   
});

cancel.addEventListener('click', appData.getReset);












