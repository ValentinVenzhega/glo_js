const money = 100000;
const income = 'фриланс';
const addExpenses = 'Интернет, Такси, Коммуналка';
const deposit = true;
const mission = 1000000;
const period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log(addExpenses.toLowerCase().split(', '));

const budgetDay = money/30;
console.log(budgetDay);