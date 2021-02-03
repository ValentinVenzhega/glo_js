'use strict';

let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let expenses = [],
   money,
   start = function() {
      do {
         money = prompt('Ваш месячный доход?');
      } 

      while (!isNumber(money));
   };
   
   start();

const
   income = 'фриланс',
   mission = 1000000,
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'соль, вода').toLowerCase().split(', '),
   deposit = confirm('Есть ли у вас депозит в банке?'),
   showTypeOf = function(data) {
      console.log(data, typeof(data));
   },
   getExpensesMonth = function() {
      let sum = 0;

      for (let i = 0; i < 2; i++) {
         expenses[i] = prompt('Введите обязательную статью расходов?');
         do {
            sum += +prompt('Во сколько это обойдется?');
         } 
   
         while (!isNumber(sum));
      }
      console.log(expenses);
      return sum;
   },
   expensesAmount = getExpensesMonth(),
   getAccumulatedMonth = function() {
      return  money - expensesAmount;
   },
   accumulatedMonth = getAccumulatedMonth(),
   getTargetMonth = function() {
      let a = Math.ceil(mission / accumulatedMonth);
      if (a > 0) {
         return (`Цель будет достигнута за ${a} месяцев(-а)`);
      } else {
         return ('Цель не будет достигнута');
      }
   },
   budgetDay = function() {
      return Math.floor(accumulatedMonth / 30);
   },
   oneDay = budgetDay(),
   getStatusIncome = function () {
      if (oneDay  > 1200) {
         return ('У вас высокий уровень дохода');
      } else if (oneDay  >= 600 && oneDay <= 1200 ) {
         return ('У вас средний уровень дохода');
      } else if (oneDay  >= 0 && oneDay  < 600 ) {
         return ('К сожалению у вас уровень дохода ниже среднего');
      }  else if (oneDay  < 0) {
         return ('Что то пошло не так');
      }
   };

// определяем тип переменных
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log(`Расходы за месяц ${expensesAmount}`);
console.log(addExpenses);
console.log(getTargetMonth());
console.log( `Бюджет на день: ${budgetDay()}`);
console.log(getStatusIncome());


















