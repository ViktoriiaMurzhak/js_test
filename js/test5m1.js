// ! PROTOTYPE прототипи ============

// ? https://miro.com/app/board/o9J_ku0WE0g=/
 // ? * - Object.create()
 // ? * - [[Prototype]] и __proto__
 // ? * - Object.getPrototypeOf()
 // ? * - Собственные свойства и Object.prototype.hasOwnProperty()
 // ? * - Цепочка прототипов


// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

//*  * Алгоритм поиска свойства в цепочке прототипов:
//  * 1. Поиск начинается в собственных свойствах
//  * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
//  * 3. Поиск прекращается при первом совпадении (есть такое свойство)
//  * 4. Возвращается значение свойства


// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);

// ! Основы ООП: класс, экземпляр (объект), интерфейс

// ? Функции-конструкторы
// ? * - Именование
// ? * - Оператор new
// ? * - Свойство Function.prototype

// class Car {
//   constructor({ brand, model, price } = {}) {
    // const { brand, model, price } = config;
    // 2. Функция вызывается в контексте созданного объекта,
    //    то есть в this записывается ссылка на него
    // this.brand = brand;
    // this.model = model;
    // this.price = price;

    // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
    //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
    // 4. Ссылка на обьект возвращается в место вызова new Car
//   }
//   sayHi() {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }



// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

// ! Статические свойства и методы
// ?  - Статические свойства и методы доступны только на самом конструкторе
// ? * - В статических методах не нужен this


// User.message =
//   'Я статическое свойство, меня нет на экземплярах или в прототипе.';

// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// ! COUNTER =============
// class CounterPlugin {
//   constructor({
//     rootSelector, initialValue = 0, step = 1, onUpdate = () => null,
//   } = {}) {
//     this._value = initialValue;
//     this._step = step;
//     this._refs = this._getRefs(rootSelector);

//     this.onUpdate = onUpdate;

//     this._bindEvents();
//     this.updateValueUI();
//   }
//   _getRefs(rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector('[data-increment]');
//     refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//     refs.value = refs.container.querySelector('[data-value]');

//     return refs;
//   }
//   _bindEvents() {
//     this._refs.incrementBtn.addEventListener('click', () => {
//       console.log('CounterPlugin.prototype._bindEvents -> this', this);
//       this.increment();
//       this.updateValueUI();
//     });

//     this._refs.decrementBtn.addEventListener('click', () => {
//       console.log('CounterPlugin.prototype._bindEvents -> this', this);
//       this.decrement();
//       this.updateValueUI();
//     });
//   }
//   updateValueUI() {
//     this._refs.value.textContent = this._value;

//     this.onUpdate();
//   }
//   increment() {
//     this._value += this._step;
//   }
//   decrement() {
//     this._value -= this._step;
//   }
// }

// new CounterPlugin({
//   rootSelector: '#counter-1',
//   step: 10,
//   initialValue: 100,
//   onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
// });

// new CounterPlugin({ rootSelector: '#counter-2', step: 2 });

// ! task ==========
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
  
//   #price;
  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log('this.MAX_PRICE', Car.MAX_PRICE);
//     if (newPrice <= Car.MAX_PRICE) {
//      this.#price = newPrice;
//     } 
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ! task

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice(price){
//   if(price > Car.#MAX_PRICE){
//     return "Error! Price exceeds the maximum";
//   } else{
//     return "Success! Price is within acceptable limits";}
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ! task
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor({email, accessLevel}){
//   super(email);

//   this.accessLevel = accessLevel;
// }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ! task
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
blacklist(email){
  this.blacklistedEmails.push(email);
}
  isBlacklisted(email){
    this.blacklistedEmails.includes(email);
  }
  
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
