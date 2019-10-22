'use strict';
let mission = 2000;
let period = 6;
let income = "400";
let money = +prompt ("Ваш месячный доход?", "");
let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую", "");
console.log(addExpenses.split (", "));

let deposit = confirm (Boolean ("Если у вас депозит в банке"), "");
console.log(typeof money);
console.log(typeof income);
console.log( typeof deposit);

let a1 = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = +prompt("Во сколько обойдется?", ''),
    a3 = +prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = +prompt("Во сколько обойдется?", '');

 let budgetMonth = (money - a2-a4);

 console.log( Math.ceil (mission/budgetMonth));
 console.log(Math.floor(budgetMonth/30));


 if (budgetDay  > 800) {
    budgetDay="Высокий уровень дохода";
 } 
   esli if (budgetDay <  800) {
     budgetDay ="Средний уровень дохода";
} 
    esli if (budgetDay  > 300 ) {
    budgetDay ="Средний уровень дохода" ;
 }
    else if (budgetDay < 300){
         budgetDay = "Средний уровень дохода";
    }
 if (budgetDay < 0) {
         alert ("Что -то пошло не так");
}









