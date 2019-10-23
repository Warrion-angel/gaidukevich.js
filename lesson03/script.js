'use strict';
let mission = 2000;
let period = 6;
let income = "Вышивание";
let money = +prompt ("Ваш месячный доход?", "");
let deposit = confirm ("Если у вас депозит в банке?");

let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую", "");
console.log(addExpenses.split (", "));


console.log(typeof money);
console.log(typeof income);
console.log( typeof deposit);

let loss1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
damages1= +prompt("Во сколько обойдется?", ''),
    loss2 = prompt("Введите обязательную статью расходов в этом месяце", ''),
damages2 = +prompt("Во сколько обойдется?", '');
let damages = damages1+damages2; //объявляем общую переменную для вычитания бюджета на день
console.log(damages);
let loss = loss1 + loss2;
console.log(loss);

 let budgetMonth = (money - damages); // бюджет на месяц
 

 console.log( Math.ceil (mission/budgetMonth)); // бюджет на день
 console.log(Math.floor(budgetMonth/30)); // цель достигнута будет
 let budgetDay = budgetMonth/30;


 if (budgetDay  < 300) { // ветвление
   console.log("Низкий  уровень доход");
 }    else if (budgetDay <= 800) {
   console.log(" Средний уровень дохода");
 }     else   {      
   console.log("Высокий уровень дохода");
 }









