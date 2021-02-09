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
   incomeTitle = document.querySelector('.income-title'),
   incomeAmount = document.querySelector('.income-amount'),
   expensesTitle = document.querySelector('.expenses-title'),
   expensesAmount = document.querySelector('.expenses-amount'),
   additionalExpensesItem = document.querySelector('.additional_expenses-item'),
   depositAmount = document.querySelector('.deposit-amount'),
   depositPercent = document.querySelector('.deposit-percent'),
   targetAmount = document.querySelector('.target-amount'),
   periodSelect = document.querySelector('.period-select');


   console.log(start);
   console.log(incomeAdd);
   console.log(expensesAdd);
   console.log(depositCheck);
   console.log(additionalIncomeItem);
   console.log(budgetMonthValue);
   console.log(budgetDayValue);
   console.log(expensesMonthValue);
   console.log(additionalIncomeValue);
   console.log(additionalExpensesValue);
   console.log(incomePeriodValue);
   console.log(targetMonthValue);
   console.log(salaryAmount);
   console.log(incomeTitle);
   console.log(incomeAmount);
   console.log(expensesTitle);
   console.log(expensesAmount);
   console.log(additionalExpensesItem);
   console.log(depositAmount);
   console.log(depositPercent);
   console.log(targetAmount);
   console.log(periodSelect);












// let money,
//    isNumber = function(n){
//    return !isNaN(parseFloat(n)) && isFinite(n);
//    },
//    start = function () {
//       do {
//          money = +prompt('Ваш месячный доход?', '50000');
//       } 
//       while (!isNumber(money) ||  money === 0 ||  money === '');
//    };
//    start();
   
// let appData = {
//    income: {},
//    addIncome: [],
//    expenses: {},
//    addExpenses: [],
//    deposit: false,
//    procentDeposit: 0,
//    moneyDeposit: 0,
//    mission: 1000000,
//    budget: money,
//    budgetDay: 0, // бюджет на день
//    budgetMonth: 0, // бюджет на месяц
//    expensesMonth: 0, // расходы на месяц
//    period: 3,
//    asking: function() {

//       if(confirm('Есть ли у вас дополнительный источник заработка?')) {
//          let itemIncome,
//             cashIncome;
//          do {
//             itemIncome =  prompt('Какой у вас есть дополнительный заработок?', 'таксую');
//          } 
//          while (isNumber(itemIncome) || itemIncome === null || itemIncome === '');

//          do {
//             cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
//          } 
//          while (!isNumber(cashIncome) || cashIncome === 0 || cashIncome === '');
//          appData.income[itemIncome] = cashIncome;
//       }
//       let addExpenses;
//       do {
//             addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'соль, вода');
//       } while(addExpenses === null || addExpenses === '');
//       appData.addExpenses = addExpenses.split(', ');
//       appData.deposit = confirm('Есть ли у вас депозит в банке?');
//       for (let i = 0; i < 2; i++) {
//          let key,
//             temp;
         
//          do {
//             key = prompt('Введите обязательную статью расходов?');
//          } 
//          while (isNumber(key) || key === null || key === '');

//          do {
//             temp = +prompt('Во сколько это обойдется?', '300');
//          } 
//          while (!isNumber(temp) || temp === 0 || temp === '');
//          appData.expenses[key] = temp;
//       }
//    },
//    getExpensesMonth: function() {
//       for(let key in appData.expenses) {
//          appData.expensesMonth += appData.expenses[key];
//       }
//    },
//    getBudget: function() {
//       appData.budgetMonth = money - appData.expensesMonth;
//       appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//    }, 
//    getTargetMonth: function() {
//       let a = Math.ceil(appData.mission / appData.budgetMonth);
//       if (a < 0 || a === Infinity) {
//          return ('Цель не будет достигнута');
//       } else {
//          return (`Цель будет достигнута за ${a} месяцев(-а)`);
//       }
//    },
//    getStatusIncome: function () {
//       if (appData.budgetDay  > 1200) {
//          return ('У вас высокий уровень дохода');
//       } else if (appData.budgetDay  >= 600 && appData.budgetDay <= 1200 ) {
//          return ('У вас средний уровень дохода');
//       } else if (appData.budgetDay  >= 0 && appData.budgetDay  < 600 ) {
//          return ('К сожалению у вас уровень дохода ниже среднего');
//       }  else if (appData.budgetDay  < 0) {
//          return ('Что то пошло не так');
//       }
//    },
//    getInfoDeposit: function() {
//       if(appData.deposit) {
//          do {
//             appData.procentDeposit = +prompt('Какой годовой процент?', '10');
//          } 
//          while (!isNumber(appData.procentDeposit) || appData.procentDeposit === 0 || appData.procentDeposit === '');

//          do {
//             appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
//          } 
//          while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0 || appData.moneyDeposit === '');
         
         
//       }
//    },
//    calcSaveMoney: function() {
//       return appData.budgetMonth * appData.period;
//    }
// };

// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getInfoDeposit();

// console.log(appData.budget);
// console.log(appData.getTargetMonth());
// console.log(appData.getStatusIncome());

// console.log(appData.addExpenses.map(item =>  `${item[0].toUpperCase()}${item.slice(1)}`).join(', '));

// for (let key in appData) {
//    console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
// }

