// !Операция spread(распыление)========
// ? - Array.prototype.concat() и аналог через spread
// * ...змінна - розпиляє масив на незалежні елементи, так можна з багатьох масивів робити 1. При розпиленні роблять копії елементів

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 9000, ...[7, 8, 9]];

// console.log(numbers);

// ! Поиск самой маленькой или большой температуры (числа)==================

// const temps = [18, 14, 12, 21, 39, 17, 29, 24];

// * найбільше число
// console.log(Math.max(...temps));

// * найменше число
// console.log(Math.min(...temps));

// * ----------------------------------
// * як розпилити об'єкти (масиви будуть не рівні, а їх значення буде рівним (бо при розпиленні об'єктів в масив передаються його ссилки)) - не копія:
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// true - об'єкти рівні
// console.log(a === b);
// false - бо масиви не рівні

// a[0].x = 1000;
// * поміняємо значення в а, автоматично зміниться і b

// console.log('a: ', a);
// console.log('b: ', b);

// ! Сшиваем несколько массивов в один через concat() и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// * Це через concat:
// const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log('xx', xx)

// * Це через spread (...значення):
// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// ! Распыление объектов===============
// ? - Object.prototype.assign() и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// * який ключ буде останнім у формулі, його знаення і підтягнеться. Якщо і там і там є х, то значення в х заміняють один одногою

// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };

// console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// ! Деструктуризация объекта
// ?  - Значения по умолчанию
// ? - Имя переменной отличное от имени свойства

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// * Якщо {} - стоїть зліва від = - то це операція деструктуризація. Тобто ми розбираємо об'єкт по ключам, і потім можна законсолити окремо кожне значення.Дані беруться з того об'єкта, який зправа від =.

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;

// console.log(numberOfTracks);

// ! Глубокая деструктуризация==========

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

// ! Деструктуризация массивов=======

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   // варік 2
//   // const [name, rating] = entry;

//   // варік 1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

//   ! Операция rest (сбор)=========
// * Коли потрібно деякі елементи деструктуризувати, а деякі згрупувати в окремий об'єкт (...змінна):

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

//  ! Паттерн «Обьект настроек»
// ? - деструктуризация параметра-обьекта в подписи функции
//  ?  - rest при деструктуризации в подписи
// * якщо функція викликає багато значень, краще зробити для неї об‘єкт налаштувань

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     ...restProps } = userProfile;

//   console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// showProfileInfo(profile);

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1){
      const {name} = this.potions[i];
       
      if (oldName === name) {
        console.log('Find:', oldName)
        console.log('i', i);

        potions.splice(i, 1, {name: newName, price: potions[i].price});

        console.log('potions', potions)
      }
    }

  
    
    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
};

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
