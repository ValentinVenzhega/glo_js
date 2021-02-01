let money = 100000;
const income = 'фриланс';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
const mission = 1000000;
let period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money/30;
console.log(budgetDay);

console.log(money = +prompt('Ваш месячный доход?'));
console.log(addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'));
console.log(deposit = confirm('Есть ли у вас депозит в банке?'));

// вычисление расходов
const expenses1 = prompt('Введите обязательную статью расходов?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount1  = +prompt('Во сколько это обойдется?');
const amount2  = +prompt('Во сколько это обойдется?');

console.log( `expenses1: ${expenses1}`);
console.log(`expenses2: ${expenses2}`);
console.log(`amount1: ${amount1}`);
console.log(`amount2: ${amount2}`);

// вычисление бюджета на месяц
const budgetMonth = amount1 + amount2;
console.log(`Бюджет на месяц: ${budgetMonth}`);

// период достижения цели
console.log(`Цель будет достигнута за ${Math.ceil(period = mission / (money - budgetMonth))} месяцев(-а)`);

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