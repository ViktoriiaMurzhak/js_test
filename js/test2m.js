// ! =============================
// ?МАСИВИ - колекція однакових елементів, через []
// const friends = ['Mango', 'Kiwi', 'Banana', 'Cherry'];
// console.table(friends);

// friends[1] = 'Vika';
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex)

//! =============================
// ?Примітиви ти складні типи
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);
// b - залишається 10, бо оновлення даних не відбувається автоматично

// !==============================
// ?Посилання

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;
// console.log('a', a);
// console.log('b', b);

// в масиві є автоматична зміна.

// !================================
// ?Перебір (ітерація) масиву
// const friends = ['Mango', 'Kiwi', 'Banana', 'Cherry', 'Kikky'];
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1){
//   friends[i] += ' client';
// }

// for of - використовувати коли не потрібен індекс, або не потрібно змінювати елемент масиву

// for (const friend of friends) {
//   console.log(friend);
// }
// console.table(friends);

// !=======================================
// ?ЗАДАЧА, показати загальну суму покупок в корзині

// const cart = [54, 28, 105, 70, 92, 17, 3, 120, 67, 990, 34];
// let total = 0;

// 1. перебрати масив
// 2. зробити змінну для суми тотал до циклу
// 3. кожен Ел додати в тотал

// варіант 1:

// for (let i = 0; i < cart.length; i += 1){
//  console.log(cart[i]);

//   total += cart[i];
// }

// варіант 2:
// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

//! ======================================
// ?Задача, сума всіх парних чисел
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14, 7, 90];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   const number = numbers[i]
//   console.log(number);

//   if (number % 2 === 0) {
// console.log('Parne!!!')

//     total += number;
//   }
// }
// for (const number of numbers) {
//   if (number % 2 === 0) {
//   console.log('Parne!!!')

//     total += number;
//   }
// }

// console.log('Total:', total);

//!=======================================
// ?Задача, пошук логіна
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `ользователь ${loginToFind} ne найден.`;

//  for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//  console.log('Login: ', login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
//  }

// for (const login of logins) {
  // console.log('Login: ', login);
  // console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
    // console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);

// const message = logins.includes(loginToFind)
//  . ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// !========================================
// ?Задача : Напиши скрипт поиска самого маленького числа в массиве, при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0]; 

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

//! ========================================
// ?Задача :  * Напиши скрипт, который объединяет все элементы массива в одно строковое значение. Элементов может быть произвольное кол-во. Пусть элементы массива  в строке будут разделены запятой. - Сначала через for - Потом через join()

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1)

// const string = friends.join(', ');
//   console.log(string);

// !========================================
// ?Задача : Напиши скрипт который заменяет регистр каждого символа в строке на противоположный. Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('ця буква в нижньму регістрі', letter)
  //   invertedString += letter.toUpperCase();
  // } else {
  //   invertedString += letter.toLowerCase();
  // }

// var 2
//   invertedString += 
//   letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
// }

// console.log(invertedString);

// !========================================
//  ?Делаем slug в URL из названия статьи (например на dev.to) Заголовок статьи состоит только из букв и пробелов - Нормализируем строку - Разбиваем по словам - Сшиваем в строку с разделителями

// const title = 'Top 10 benefits of React framework';
// const normalizeTitle = title.toLowerCase();
// console.log(normalizeTitle);

// const words = normalizeTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1)

// !=========================================
// ?задача: Напиши скрипт который считает сумму элементов двух массивов.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;



// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// !=========================================
// ?задача:Работем с коллекцией карточек в trello - Метод splice - Удалить - Добавить - Обновить

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

//* видалити

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

//* додати

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

//* оновити
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);



