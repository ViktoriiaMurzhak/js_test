// SWITCH - використовується, коли прирівнюється і змінюється значення однієї змінної (===). Замість багатьох if else 

const stars = 5;
let prise;

// switch (stars) {
//   case 1:
//     prise = 20;
//     break;
  
//   case 2:
//     prise = 30;
//     break;
  
//    case 3:
//     prise = 50;
//     break;
  
//   case 4:
//     prise = 70;
//     break;
  
//   case 5:
//     prise = 120;
//     break;
  
//   default:
//     console.log('Такої кількості зірок немає')
// }


// -------------SWITCH з оператором || (або)
switch (stars) {
  case 1:
  case 2:
    prise = 20;
    break;
  
  case 3:
  case 4:
    prise = 30;
    break;
 
  case 5:
    prise = 120;
    break;
  
  default:
    console.log('Такої кількості зірок немає')
}
// console.log(prise);

// ====================================
// ====================================
// Цикл for

for (let i = 21; i <= 40; i += 2 ){
  // console.log(i);
}

// задача
const minSalary = 500;
const maxSalary = 5000;
const employers = 8;
let totalSalary = 0;

for (let i = 1; i <= employers; i += 1){
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
  // console.log(`ЗП працівника номер ${i} - ${salary}`);

  totalSalary += salary;
 
}
//  console.log('total salary:', totalSalary);

// задача сума всіх парних в діапазоні від мін до макс

const min = 3;
const max = 11;
let total = 0;

for (let i = min; i <= max; i += 1){
  if (i % 2 !== 0) {
    // console.log('Ne parne');
    // continue;
  }

  // console.log('parne: ', i);
  total += i;
}

// console.log("total: ", total);

// задача знижка по парнерській програмі
let totalSpent = 10000;
let payment = 1200;
let discount = 0;
if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовий партнер, знижка 2%');
  discount = 0.02;
}
else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Срібний партнер, знижка 5%');
  discount = 0.05;
}
else if (totalSpent >= 5000){
  console.log('Золотий партнер, знижка 10%');
  discount = 0.1;
} else {
  console.log('Не партнер, знажка 0%')
}

payment -= payment * discount;

console.log(`Оформляємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

totalSpent += payment;
console.log(`Загальна сума витрав в магазині - ${totalSpent}`);


