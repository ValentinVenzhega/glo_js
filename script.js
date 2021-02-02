'use strict';

const money = +prompt('Ваш месячный доход?'),
      income = 'фриланс',
      mission = 1000000,
      expenses1 = prompt('Введите обязательную статью расходов?'),
      amount1 = +prompt('Во сколько это обойдется?'),
      expenses2 = prompt('Введите обязательную статью расходов?'),
      amount2 = +prompt('Во сколько это обойдется?'),
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?');


const showTypeOf = function(data) {
         console.log(data, typeof(data));
      },
      getExpensesMonth = function() {
         return amount1 + amount2;
      },
      getAccumulatedMonth = function() {
         return  money - (amount1 + amount2);
         
      },
      accumulatedMonth = getAccumulatedMonth,
      getTargetMonth = function() {
         return Math.ceil(mission / accumulatedMonth);
      },
      budgetDay = function() {
         return Math.floor(accumulatedMonth / 30);
      },
      getStatusIncome = function () {
         if (budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
         } else if (budgetDay >= 600 && budgetDay<= 1200 ) {
            return ('У вас средний уровень дохода');
         } else if (budgetDay >= 0 && budgetDay < 600 ) {
            return ('К сожалению у вас уровень дохода ниже среднего');
         }  else if (budgetDay < 0) {
            return ('Что то пошло не так');
         }
      };

// наша цель
console.log(`Цель заработать ${mission} рублей`);

// Перечисляем возможные расходы
console.log(addExpenses.toLowerCase().split(', '));

// есть ли депозит в банке
console.log(`deposit: ${deposit}`);


// определяем тип переменных
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log(`Расходы за месяц ${getExpensesMonth(amount1, amount2)}`);
console.log(`Цель будет достигнута за ${getTargetMonth(money, amount1, amount2)}) } месяцев(-а)`);
console.log( `Бюджет на день: ${budgetDay}`);

// Определяем уровент дохода
console.log(`уровнь дохода ${getStatusIncome}` );





















