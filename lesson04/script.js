'use strict';

let mission = 2000;
    period = 6;
    income = "Вышивание";
    money = +prompt ("Ваш месячный доход?", "");
    deposit = confirm ("Если у вас депозит в банке?");
    addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую", "");

let showTypeof = function(){
   console.log(typeof ());
  };

showTypeof (money);
showTypeof(deposit);
showTypeof(income);

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

 let getExpensesMonth = function (){
  return damages1 +damages2
}; console.log( "Ваши расходы " + getExpensesMonth());
 let getAccumulatedMonth =function(){
   return money-getExpensesMonth()
 }; console.log("Ваши накопления составляют" + getAccumulatedMonth);

 let getTargetMonth = function () {
   return mission/getAccumulatedMonth()
 };console.log(getTargetMonth);  

 let budgetMonth = (money - damages); 
 

 console.log( Math.ceil (mission/budgetMonth)); 
 console.log(Math.floor(budgetMonth/30)); 
 let budgetDay = getAccumulatedMonth/30;
 console.log("Вы достигните сввою цель " + Math.ceil(getTargetMonth()) + " мясяцев"); 

 let getStatusIncome = function() {
    if (budgetDay  < 300) { 
        return ("Высокий уровень дохода");
      }    else if (budgetDay <= 800) {
       return ("Средний уровень дохода");
      }     else   {      
       return ("Что -то пошло не так");
      }
     };
     console.log(getStatusIncome ());

 








