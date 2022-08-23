// ! ФУНКЦІЇ===================
// const add = function (x, y) {
//   console.log('x', x);
//   console.log('y', y);

//   const result = x + y;
//   console.log('x + y =', result);
//   console.log('Виконується функція add');

//   return result;
// }

// add(2, 3);
// add(6, 28);
// add(555, 0);

// ? про return------------------
// const fn = function (value) {

//   console.log(1);
//   console.log(2);
//   console.log(3);

//   if (value < 50) {
//       return 'Менше 50';
//   }
//     return 'Більше 50';

// }

// console.log('Результат функції: ', fn(10));

// ! Стек викликів =================
// const fnA = function () {
//   console.log('Выполняется функция A');
//   fnB();
// };

// const fnB = function () {
//   console.log('Выполняется функция B');

//  fnC();
// };

// const fnC = function () {
//   console.log('Выполняется функция C');
// };

// console.log('Лог перед вызовом функции A');
// fnA();
// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');

// !Задача==========================
// ? Напиши функцию calculateTotalPrice(items) которая принимает массив цен (чисел) и возвращает их сумму
//* було так:

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// * нове рішення

// const calculateTotalPrice = function (items) {
//   console.log('items', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

// !Задача=================================
// ? Напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//   for (const item of items) {
//     console.log('item', item)
//   }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);
// !Задача=================================
// ? Напиши функцию findLogin(allLogins, login) для поиска логина - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.' - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдений.`;
//     }
//   }

//   return `Користувач ${loginToFind} не знайдений.`;
// };

// * тернарник
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? `Користувач ${loginToFind} знайдений.` : `Користувач ${loginToFind} не знайдений.`;
// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// ! Задача ==============================
// ? Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве, при условии что числа уникальные (не повторяются).

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -9, -2, 15])); // -9
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// ! Задача ==============================
// ? Напиши функцию changeCase(string) которая заменяет регистр каждого символа в строке на противоположный. Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//.       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// ! Задача ==============================
// ? Напиши функцию slugify(string) которая получает строку и возвращает URL-slug. Строка состоит только из букв и пробелов

// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// ! Псевдомассив arguments и Array.from и ...
// * варіант 1
// const fn = function () {
//   console.log('arguments', arguments);

//   const args = Array.from(arguments);
//   console.log('args', args)

//  for (const arg of arguments) {
//  console.log('arg', arg)
//  }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// * варіант 2

// const fn = function (...args) {
//   console.log('args', args)
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// * варіант 3

// const fn = function (a, ...args) {
//   console.log(`${a}`);
//   console.log(args);
// };

// fn('hello',1, 2, 3);
// fn('hi', 1, 2, 3, 4, 5);
// fn('alloha', 1, 2, 3, 4, 5, 6, 7);
// !Задача==========================
// ? Напиши функцию add для сложения произвольного количества аргументов (чисел), Операция ... (rest)

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// ! Задача ===========================
// ? Напиши функцию filterNumbers(array [, number1, ...]) которая: - первым аргументом принимает массив чисел - после первого аргумента может быть произвольное количество других аргументов которые будут числами. - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном массиве.

// const filterNumbers = function (array, ...args) {
//   console.log('array', array);
//   console.log('args', args);

//   const uniqueElements = [];

//   for (const element of array) {
    
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} є всюди!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
