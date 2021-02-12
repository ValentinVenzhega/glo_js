'use strict';

const start = document.getElementById('start'),
   incomeAdd = document.getElementsByTagName('button')[0],
   expensesAdd = document.getElementsByTagName('button')[1],
   depositCheck = document.querySelector('#deposit-check'),
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
   incomeTitle1 = document.querySelector('.income-title'),
   incomeAmount = document.querySelector('.income-amount'),
   expensesAmount = document.querySelector('.expenses-amount');
   

let money,
   expensesItems = document.querySelectorAll('.expenses-items'),
   incomeItems = document.querySelectorAll('.income-items'),
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
      appData.getSalaryAmount();
      appData.getExpenses();
      appData.getExpensesMonth();
      appData.getIncome();
      appData.getIncomeMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();
      appData.showResult();
      
   },
   showResult: function() {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcSaveMoney();
      periodSelect.addEventListener('change', (event) => {
         console.log(event.target.value);
         incomePeriodValue.value = appData.budgetMonth * event.target.value;
      });
   },
   getSalaryAmount: function () {
      
      if (salaryAmount.value === '' ) {
         alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
         return;
      }
      appData.budget = +salaryAmount.value;
   },
   addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
         expensesAdd.style.display = 'none';
      }
      console.log(expensesAdd);
   },
   addIncomeBlock : function () {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
         incomeAdd.style.display = 'none';
      }
      console.log(expensesAdd);
   },
   getExpenses: function() {
      expensesItems.forEach(function(item) {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !== '' ) {
            appData.expenses[itemExpenses] = +cashExpenses;
         }
      });
   },
   getIncome: function() {
      incomeItems.forEach(function(item) {
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = item.querySelector('.income-amount').value;
         if(itemIncome !== '' && cashIncome !== '' ) {
            appData.income[itemIncome] = +cashIncome;
         }
      });
   },
   getAddExpenses: function() {
      let addExpenses = additionalExpensesItem.value.split(', ');
      addExpenses.forEach(function(item) {
         item = item.trim();
         if (item !== '') {
            appData.addExpenses.push(item);
         }
      });
   },
   getAddIncome: function() {
      additionalIncomeItem.forEach(function(item) {
         let itemValue = item.value.trim();
         if (itemValue !== '') {
            appData.addIncome.push(itemValue);
         }
      });
   },
   getExpensesMonth: function() {
      for(let key in appData.expenses) {
         appData.expensesMonth += appData.expenses[key];
      }
   },
   getIncomeMonth: function() {
      for(let key in appData.income) {
         appData.incomeMonth += appData.income[key];
      }
   },
   getPeriodSelect: function (event) {
      const target = event.target;
      periodAmount.textContent = target.value;
      
   },
   getBudget: function() {
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   }, 
   getTargetMonth: function() {
      return Math.ceil(+targetAmount.value / appData.budgetMonth);
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
      return appData.budgetMonth * +periodSelect.value;
   },
   getNumber() {
      this.value = this.value.replace(/[^\d|,|.]+/g, "");
   },
   getString() {
      this.value = this.value.replace(/[^А-Яа-я,._ ]/,'');
   }
};

start.disabled = true;
salaryAmount.addEventListener('input', function() {
   if (salaryAmount.value !== '') {
      start.disabled = false;
      appData.start;
   } else {
      start.disabled = true;
   }
});

start.addEventListener('click', appData.start);
expensesAdd.addEventListener('click', () => {
   appData.addExpensesBlock();
   expensesTitle.value = '';
   expensesAmount.value = '';
});
incomeAdd.addEventListener('click', () => {
   appData.addIncomeBlock();
   incomeTitle.value = '';
   incomeAmount.value = '';
});
periodSelect.addEventListener('input', appData.getPeriodSelect);
salaryAmount.addEventListener('input', appData.getNumber);
incomeAmount.addEventListener('input', appData.getNumber);
expensesAmount.addEventListener('input', appData.getNumber);
targetAmount.addEventListener('input', appData.getNumber);
incomeTitle.addEventListener('input', appData.getString);
expensesTitle.addEventListener('input', appData.getString);
additionalExpensesItem.addEventListener('input', appData.getString);
additionalIncomeItem.forEach(function(item) {
   item.addEventListener('input', appData.getString);
});




