// ! Об`єкти ====================
// ?  - Литерал объекта
// ?  - Свойства, ключи (имя) и значения
// ?  - Как отличить объект от области видимости

// const playlist = {
//   name: 'Мій крутий плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// }

// console.log('playlist', playlist)

// * Об`єкт завжди справа від = в фігурних дужках

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

// ! Доступ до значення об'єкту==========
// ? - obj.key
// ? - obj['key']
// ? - Отсутствующие свойства

// const playlist = {
//   name: 'Мій крутий плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// }

// * Так додаються нові значенння в об'єкт:

// playlist.qwe = 10;

// * Якщо ж таке значення (qwe) вже є в об'єкті, і ми його прописуємо, то значення буде перезаписане.

// playlist.rating = 9;
// console.log('playlist', playlist)

// * Через крапку

// console.log(playlist.name)
// console.log(playlist.tracks)
// console.log(playlist.rating)

// * Через квадратні дужки

// console.log(playlist['rating']);

// * Значення об'єкта може зберігатися в змінній

// const propertyName = 'tracks';
// console.log(playlist[propertyName]);

// ! Короткий запис ключа ==============
// ? Якщо ім'я ключа === іиені змінної, скорочуємо запис отак:

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log('signupData', signupData);

// ! Вычисляемые свойства================
// ? Якщо ім'я ключа це значення якоїсь змінної, то ми пишемо цю змінну в квадратних дужках. Тобі js іде в змінну і витягує з неї значення.

// <input name='color' value='tomato'>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// ! Cсилочний тип {} !== {} ===========
// ? Два об'єкта не можуть бути рівні 1 1, як і масиви, бо у них різне посилання в пам'яті.

// * Отак тільки буде тру:

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// * А отак буде фолс (хоч вони і візуально схожі, але мають різні ячейки пам'яті):

// console.log({ a: 1 } === { a: 1 });

// ! Масиви і функції - це об'єкти======
// ?

// const a = [1, 2, 3];
// a.hello = ':)';

// console.log('a', a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

// ! Методы объекта и this при обращении к свойствам в методах===================
// ? http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
// ? - changeName
// ? - addTrack
// ? - updateRating
// ? - getTrackCount

// const playlist = {
//   name: 'Мій крутий плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   changeName(newName) {
//     // console.log(this)

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('New Name!');

// playlist.addTrack('new track');
// playlist.addTrack('new track 1');

// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

// console.log('playlist', playlist);

// ! Перебор через for...in и Object.keys|values|entries================
// ? Object.keys видає масив ключів

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback:', totalFeedback);

// ? Object.values видає масив значень

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);
//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

// ! Работа с коллекцией (массивом объектов)=============================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: true },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online)

//   friend.newprop = 555;
// }

// console.table(friends);

// ! Ищем друга по имени================
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// ! Получаем имена всех друзей==========

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// ! Получаем имена только друзей которые онлайн 

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//  return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// ! создать 2 массива онлайн и офлайн?если тру - в первый, если нет - во второй

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);
  
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

// ! Работем с коллекцией товаров в корзине============================

// ? - getItems()
// ? - add(product)
// ? - remove(productName)
// ? - clear()
// ? - countTotalPrice()
// ? - increaseQuantity(productName)
// ? - decreaseQuantity(productName)

// ? { name: '🍎', price: 50 }
// ? { name: '🍇', price: 70 }
// ? { name: '🍋', price: 60 }
// ? { name: '🍓', price: 110 }


const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
for (const item of this.items) {
  if (item.name === product.name) {
    item.quantiti += 1;
    return;
  }
}
    const newProduct = {
      ...product,
      quantiti: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) { 
      const { name } = items[i];

       if (productName === name) {
         console.log('FIND!!!', productName)
         
         items.splice(i, 1);
      }
    }

  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const {price, quantiti} of items) {
      total += price * quantiti;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });


// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// ! ГОТОВЕ 41/3

// addPotion(newPotion) {
//   let message = `Error! Potion ${newPotion.name} is already in your inventory!`;   

// for (const potion of this.potions) {
//   if (potion.name === newPotion.name) {
//     return message;
//   }
// };
//     const arrayPotion = {
//   ...newPotion,
// }
//     this.potions.push(arrayPotion);
//     return arrayPotion;
//   },

// ? ====================

  // removePotion(potionName) {
  //      const potionIndex = this.potions.indexOf(potionName);
  // const { potions } = this;
  //   for (let i = 0; i < potions.length; i += 1) { 
  //     const { name } = potions[i];

  //      if (potionName === name) { 
  //        potions.splice(i, 1);
  //     }
  //   }
  // },



