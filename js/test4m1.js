// ! Детальніше про стрілочні функції =======================

// const add = function (a, b) {
//   return a + b;
// }

// * Переробити можна так :
// * якщо параметрів багато:

// const add = (a, b) => {
//   return a + b;
// }

// * якщо параметр 1:

// const logMessage = message => {
//   console.log('message', message)
// }

// * якщо параметрів немає взагалі:

// const logMessage = () => {
//   console.log('hello')
// }

// ! явне повернення (explicit)
// ! неявне повернення (implicit)
// * якщо функція не виконує ніякі дії, крім повернення 

// const add = (a, b) => a + b;

// ! Псевдомасив arguments=======
// const add = (...args) => {
//   console.log(args)
// };

// ! Контекст стрілки ============
// ? Контекст всередині стрілки визначається місцем її об'яви, а не виклику, і ссилається на контекст батьківської функції

// const showThis = () => {
//   console.log('this is showThis', this);
// };

// showThis(); // undefind

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this:', this);
//     console.log('this.fullName:', this.fullName);

//     const inner = () => {
//       // * тут this буде братися від батьківської функції, через те, що функція стрілочна
//       console.log('this in inner:', this)
//     }

//     inner();
//   },
// }; 

// user.showName();

// ! Стрілки як методи об'єкта
// ? Стрілки не бувають в методі об'єкта, 

// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this:', this);
//     // * тут this буде undefind
//     console.log('this.fullName:', this.fullName)
//   },
// }; 
// user.showName();

// * інше пояснення

// const objA = {
//   x: 5,
//   showX() {
//     console.log('this in objA.showX', this)
//     console.log('x', this.x);

//     const objB = {
//       y: 10,
//       showThis: () => {
//         console.log('this in objB.showThis', this)
//       }
//     }

//     objB.showThis();
//   },
// };

// objA.showX();

// * 



// ! Стрілка не може бути конструктором

// ! Цепочки викликів - chaining ===
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log('greaterThenTwo', greaterThenTwo);

// ! Задача ===========================
// ? Сортуємо тих, хто онлайн по рангу

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800},
//   { id: 'id-2', tag: 'Polly', isOnline: false, rank: 600},
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100},
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400},
// ];

// const onlineAndSorted = players
//   .filter((player) => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.table(onlineAndSorted);
