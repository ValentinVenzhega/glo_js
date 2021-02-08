'use strict';

let money,
   isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
   },
   start = function () {
      do {
         money = +prompt('Ваш месячный доход?', '50000');
      } 
      while (!isNumber(money));
   };
   start();
   
let appData = {
   income: {},
   addIncome: [],
   expenses: {},
   addExpenses: [],
   deposit: false,
   procentDeposit: 0,
   moneyDeposit: 0,
   mission: 1000000,
   budget: money,
   budgetDay: 0, // бюджет на день
   budgetMonth: 0, // бюджет на месяц
   expensesMonth: 0, // расходы на месяц
   period: 3,
   asking: function() {

      if(confirm('Есть ли у вас дополнительный источник заработка?')) {
         let itemIncome,
            cashIncome;
         do {
            itemIncome =  prompt('Какой у вас есть дополнительный заработок?', 'таксую');
         } 
         while (isNumber(itemIncome));

         do {
            cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
         } 
         while (!isNumber(cashIncome));
         appData.income[itemIncome] = cashIncome;
      }
      

      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'соль, вода');
      appData.addExpenses = addExpenses;
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      for (let i = 0; i < 2; i++) {
         let key,
            temp;
         
         do {
            key = prompt('Введите обязательную статью расходов?');
         } 
         while (isNumber(key));

         do {
            temp = +prompt('Во сколько это обойдется?', '300');
         } 
         while (!isNumber(temp));
         appData.expenses[key] = temp;
      }
   },
   getExpensesMonth: function() {
      for(let key in appData.expenses) {
         appData.expensesMonth += appData.expenses[key];
      }
   },
   getBudget: function() {
      appData.budgetMonth = money - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   }, 
   getTargetMonth: function() {
      let a = Math.ceil(appData.mission / appData.budgetMonth);
      if (a < 0 || a === Infinity) {
         return ('Цель не будет достигнута');
      } else {
         return (`Цель будет достигнута за ${a} месяцев(-а)`);
      }
   },
   getStatusIncome: function () {
      if (appData.budgetDay  > 1200) {
         return ('У вас высокий уровень дохода');
      } else if (appData.budgetDay  >= 600 && appData.budgetDay <= 1200 ) {
         return ('У вас средний уровень дохода');
      } else if (appData.budgetDay  >= 0 && appData.budgetDay  < 600 ) {
         return ('К сожалению у вас уровень дохода ниже среднего');
      }  else if (appData.budgetDay  < 0) {
         return ('Что то пошло не так');
      }
   },
   getInfoDeposit: function() {
      if(appData.deposit) {
         do {
            appData.procentDeposit = +prompt('Какой годовой процент?', '10');
         } 
         while (!isNumber(appData.procentDeposit));

         do {
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
         } 
         while (!isNumber(appData.moneyDeposit));
         
         
      }
   },
   calcSaveMoney: function() {
      return appData.budgetMonth * appData.period;
   }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log(appData.budget);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

console.log(appData.addExpenses.split(', ').map(item =>  `${item[0].toUpperCase()}${item.slice(1)}`).join(', '));

for (let key in appData) {
   console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
}

