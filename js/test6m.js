// ! Пошук елементів

// const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);
// * тут знайде 1 підходящій


// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);
// * тут знайде всі
/*
 * Document.querySelector* и Element.querySelector*
 */

// * можна шукати елементи в середині елементу, (шукати дітей)

// navEl.querySelectorAll('.site-nav__link');

// ! Властивості елементу
// ? Свойства элемента (hero)
// ? - Изображение
// ? - Текст и textContent
// ? https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480

//  const magicBtn = document.querySelector('.js-magic-btn');

// const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
// imageEl.src =
  // 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'Это новый котик';

// const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// heroTitleEl.textContent = 'Я сладкий пирожочек!';

// ! Атрибуты
// ? - get(имя-атрибута)
// ? - set(имя-атрибута)
// ? - remove(имя-атрибута)
// ? - has(имя-атрибута)

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

// ! Data-атрибуты

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[2].dataset.action);


// !  Интерфейс classList
// ? - add(класс)
// ? - remove(класс)
// ? - toggle(класс)
// ? - replace(старыйКласс, новыйКЛасс)
// ? - contains(класс)


// const magicBtn = document.querySelector('.js-magic-btn');

// const currentPageUrl = '/contact';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

// !Свойства «навигации» по DOM-узлам (взять список)
// ? http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html


const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.querySelector('.site-nav__item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);