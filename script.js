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


// определяем тип переменных
let showTypeOf = function(data) {
   console.log(data, typeof(data));
};


// Расходы за месяц
function getExpensesMonth() {
   return amount1 + amount2;
}


// Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
   return money - (amount1 + amount2);
}

const accumulatedMonth = getAccumulatedMonth();

//за какой период будет достигнута цель
function  getTargetMonth() {
   return Math.ceil(mission / accumulatedMonth);
}


// Бюджет на день
function budgetDay() {
   return Math.floor(accumulatedMonth / 30);
}


// Определяем уровент дохода
function getStatusIncome() {
   if (budgetDay() > 1200) {
      return ('У вас высокий уровень дохода');
   } else if (budgetDay() >= 600 && budgetDay() <= 1200 ) {
      return ('У вас средний уровень дохода');
   } else if (budgetDay() >= 0 && budgetDay() < 600 ) {
      return ('К сожалению у вас уровень дохода ниже среднего');
   }  else if (budgetDay() < 0) {
      return ('Что то пошло не так');
   }
}

// наша цель
console.log(`Цель заработать ${mission} рублей`);

// Перечисляем возможные расходы
console.log(addExpenses.toLowerCase().split(', '));

// есть ли депозит в банке
console.log(`deposit: ${deposit}`);

// вычисление расходов
console.log( `expenses1: ${expenses1}`);
console.log(`amount1: ${amount1}`);
console.log(`expenses2: ${expenses2}`);
console.log(`amount2: ${amount2}`);

// определяем тип переменных
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log(`Расходы за месяц ${getExpensesMonth()}`);
console.log(`Накопления за месяц ${accumulatedMonth}`);
console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев(-а)`);
console.log( `Бюджет на день: ${budgetDay()}`);

// Определяем уровент дохода
console.log(getStatusIncome());


















