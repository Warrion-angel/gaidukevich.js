'use strict';
let mission = 2000;
let money = +prompt ("Ваш месячный доход?", "");
let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую", "");
console.log(addExpenses.split (", "));

let deposit = prompt ("Если у вас депозит в банке", "false");
console.log(typeof money);
console.log(typeof income);
console.log( typeof deposit);
let a1 = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = +prompt("Во сколько обойдется?", ''),
    a3 = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = +prompt("Во сколько обойдется?", '');
appData.expenses[a1] = a2;
appData.expenses[a3] = a4; 
 let budgetMonth = (money - a1 - a3);
 
 console.log(Mach.ceil (mission/budgetMonth));
 console.log(Math.floor(budgetMonth/30));


 if(budgetDay >800){
     alert ("Высокий уровень дохода")
 }
if(budgetDay 300>800){
    alert ("Средний уровень дохода")
}
if(budgetDay 0>300){
    alert ("Низкий уровень дохода")
}
if (budgetDay <0) {
    alert ("Что -то пошло не так")
}









