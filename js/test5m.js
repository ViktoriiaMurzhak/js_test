// ! Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП

// * всі вони повертають ФОЛС, бо порівнюються по посиланню на ячейку пам'яті

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// * а тут буде ТРУ, бо в змінну ми визначаємо посилання на функцію.

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;

// console.log('fnB === fnA: ', fnB === fnA);

// ! Контекст (this) ===========
// ? - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
// ? - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.

// ? Как метод объекта. В контексте объекта.

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

// ! Вызов без контекста
// ? - В строгом режиме = undefined
// ?  - Не в строгом режиме = window

// const foo = function () {
//   console.log('foo -> this', this);
// };

// foo();

// ! Как метод объекта, но объявлена как внешняя функция. В контексте объекта.

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };

// // showTag();

// const user = {
//   tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// ! Вызов без контекста, но объявлена как метод объекта.

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// ! Контекст в callback-функциях

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// * буде андефаінд, бо екшн визваний без юзер.
// invokeAction(user.showTag);

// ! Тренируемся 1

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Какой this ???
// * undefind

// ! Тренируемся 2

// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // Какой this ???
// * об'єкт

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???
// * undefind

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???
// * undefind

// ! Тренируемся 3

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     // this.color = color;
//   };

//   // changeColor(); // Какой this ???
//   // * undefind

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

//   // sweater.updateColor('red'); // Какой this ???
//   // * на об'єкт светер

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???
// * undefind

// ! Тренируемся 4

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ???
 // * undefind

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('orange'); // Какой this ???
// // * на об'єкт hat

// ! Тренируемся 5

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// ! call и apply =============

// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//     color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

// ! bind =====================
// ? копія функції з прив'язаним контекстом

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

// ! counter (пофіксили)

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);


// ! COUNTER ====================
// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на декремент');

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на инкремент');

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// console.log(window);