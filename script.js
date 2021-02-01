const money = +prompt('Ваш месячный доход?'),
      income = 'фриланс',
      mission = 1000000,
      expenses1 = prompt('Введите обязательную статью расходов?'),
      amount1 = +prompt('Во сколько это обойдется?'),
      expenses2 = prompt('Введите обязательную статью расходов?'),
      amount2 = +prompt('Во сколько это обойдется?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
   period = 12,
   deposit = confirm('Есть ли у вас депозит в банке?'),
   budgetDay;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));

// Перечисляем возможные расходы
console.log(addExpenses);

// вычисление расходов
console.log( `expenses1: ${expenses1}`);
console.log(`amount1: ${amount1}`);
console.log(`expenses2: ${expenses2}`);
console.log(`amount2: ${amount2}`);

// вычисление бюджета на месяц
const budgetMonth = money - (amount1 + amount2);
console.log(`Бюджет на месяц: ${budgetMonth}`);

// период достижения цели
console.log(`Цель будет достигнута за ${Math.ceil(period = mission / budgetMonth)} месяцев(-а)`);

// Бюджет на день
console.log( `Бюджет на день: ${Math.floor(budgetDay = budgetMonth / 30)}`);

// Определяем уровент дохода
if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200 ) {
   console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 600 ) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
}  else if (budgetDay < 0) {
   console.log('Что то пошло не так');
}