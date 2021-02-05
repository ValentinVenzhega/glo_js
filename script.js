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
   mission: 1000000,
   budget: money,
   budgetDay: 0, // бюджет на день
   budgetMonth: 0, // бюджет на месяц
   expensesMonth: 0, // расходы на месяц
   asking: function() {
      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'соль, вода');
      appData.addExpenses = addExpenses.toLowerCase().split(', ');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      for (let i = 0; i < 2; i++) {
         let key,
            temp;
         key = prompt('Введите обязательную статью расходов?');
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
      let budgetMonth = money - appData.expensesMonth;
      appData.budgetMonth = budgetMonth;
      let budgetDay = Math.floor(appData.budgetMonth / 30);
      appData.budgetDay = budgetDay;

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
   }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log(appData.budget);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

console.log(appData);
for (let key in appData) {
   console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
}

