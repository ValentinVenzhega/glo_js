'use strict';

const money = +prompt('Ваш месячный доход?', '50000'),
   income = 'фриланс',
   mission = 1000000,
   expenses1 = prompt('Введите обязательную статью расходов?', 'хлеб'),
   amount1 = +prompt('Во сколько это обойдется?', '1000'),
   expenses2 = prompt('Введите обязательную статью расходов?', 'масло'),
   amount2 = +prompt('Во сколько это обойдется?', '2000'),
   addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'соль, вода').toLowerCase().split(', '),
   deposit = confirm('Есть ли у вас депозит в банке?'),
   showTypeOf = function(data) {
      console.log(data, typeof(data));
   },
   getExpensesMonth = function() {
      return amount1 + amount2;
   },
   getAccumulatedMonth = function() {
      return  money - (amount1 + amount2);
      
   },
   accumulatedMonth = getAccumulatedMonth(),
   getTargetMonth = function() {
      return Math.ceil(mission / accumulatedMonth);
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


console.log(`Расходы за месяц ${getExpensesMonth()}`);
console.log(addExpenses);
console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев(-а)`);
console.log( `Бюджет на день: ${budgetDay()}`);
console.log(getStatusIncome());





















