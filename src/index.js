import './styles.css';
import items from './menu.json';
import templateItem from './templates/menu-item.hbs';

const body = document.querySelector('body');
const menuList = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-control');
const classAdd = body.classList.add.bind(body.classList);
const classRemove = body.classList.remove.bind(body.classList);

menuList.insertAdjacentHTML('afterbegin', templateItem(items));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

checkTheme();

function checkTheme() {
  localStorage.getItem('theme') === DARK
    ? (classAdd(DARK), (themeSwitch.checked = true))
    : classAdd(LIGHT);
}

function writeInLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

const themeSwitcher = event => {
  if (!event.target.checked) {
    writeInLocalStorage('theme', LIGHT);
    classAdd(LIGHT);
    classRemove(DARK);
  } else {
    writeInLocalStorage('theme', DARK);
    classAdd(DARK);
    classRemove(LIGHT);
  }
};

themeSwitch.addEventListener('change', themeSwitcher);

////////////////////////////////////////////////////// END Of HOMEWORK /////////////////////////////////////////////////

// const switcher = document.querySelector('#switcher-1');
// const switcher2 = document.querySelector('#switcher-2');
// const bodyClass = document.querySelector('body');
// console.log(bodyClass);

// switcher.addEventListener('click', () => {
//   let darkTheme = switcher.checked;
//   localStorage.setItem('theme', darkTheme);
//   switcher2.checked = switcher.checked;

//   localStorage.getItem('theme') === 'true'
//     ? bodyClass.classList.add('background-black')
//     : bodyClass.classList.remove('background-black');
// });

// switcher2.addEventListener('click', () => {
//   let darkTheme = switcher2.checked;
//   localStorage.setItem('theme', darkTheme);
//   switcher.checked = switcher2.checked;

//   localStorage.getItem('theme') === 'true'
//     ? bodyClass.classList.add('background-black')
//     : bodyClass.classList.remove('background-black');
// });

// localStorage.getItem('theme') === 'true'
//   ? bodyClass.classList.add('background-black')
//   : bodyClass.classList.remove('background-black');

// console.log('Hello');

// function toSayHello() {
//   setTimeout(() => {
//     console.log('Hi');
//   }, 5000);
// }

// function toSayHelloInterval() {
//   setInterval(() => {
//     console.log('Hi');
//   }, 4);
// }

// toSayHelloInterval();

// let num = 0;

// function toSayHello() {
//   const int = setInterval(() => {
//     console.log('VAsya');
//     num++;
//     if (num === 15) {
//       clearInterval(int);
//       return;
//     }
//   }, 1000);
// }

// // toSayHello();

// const date = new Date();
// // console.log(date);

// const date2 = new Date(2202020000221);
// // console.log(date2);

// const date3 = Date.now(2020, 8, 1, 12, 43);
// console.log(date3);

// let num1 = Math.round(Math.random() * (10 - 1) + 1);

// function fn(cl1, cl2) {
//   if (num1 > 5) {
//     cl1();
//   } else {
//     cl2();
//   }
// }

// function sucess() {
//   console.log('Ok');
// }

// function err() {
//   console.log('Error');
// }

// fn(sucess, err);

// function fn2() {
//   let promise = new Promise((res, rej) => {
//     res(console.log('Ok'));
//     rej(console.log('Error'));
//   });
//   return promise;
// }

// // fn2();

// let promise2 = new Promise((res, rej) => {
//   setTimeout();
//   res();
//   rej();
// });

// let i = 0;
// let counter = function () {
//   setTimeout(counter, i);
//   if (i <= 1400) {
//     i += 100;
//     if (i < 900) {
//       console.log(`${i} So slow...`);
//     } else if (i > 900 && i < 1200) {
//       console.log(`${i} Wow, it's good speed!`);
//     } else {
//       console.log(`${i} No-no-no, faster, please`);
//     }
//   }
// };

// counter();

// const result = document.querySelector('.count');
// const startButton = document.querySelector('.button-start');
// const stopButton = document.querySelector('.button-stop');
// const lapButton = document.querySelector('.button-lap');
// const lap = document.querySelector('.lap');

// let timerId;
// let counter = 0;
// result.textContent = counter;
// function letCount() {
//   startButton.setAttribute('disabled', 'disabled');
//   timerId = setInterval(() => {
//     counter += 100;
//     result.textContent = counter / 1000 + 's';
//   }, 100);
//   stopButton.textContent = 'Stop';
// }

// function stopCount() {
//   clearInterval(timerId);
//   startButton.removeAttribute('disabled');

//   if (stopButton.textContent === 'Stop') {
//     stopButton.textContent = 'Reset';
//   } else if (stopButton.textContent === 'Reset') {
//     counter = 0;
//     result.textContent = counter;
//     lap.remove();
//   }
// }

// function setLap() {
//   if (stopButton.textContent === 'Reset') {
//     lap.setAttribute('disabled', 'disabled');
//   } else {
//     lap.removeAttribute('disabled');
//     const text = `<p>${counter / 1000} </p>`;
//     lap.innerHTML += text;
//   }
// }

// startButton.addEventListener('click', letCount);

// stopButton.addEventListener('click', stopCount);

// lapButton.addEventListener('click', setLap);

// const inputCountry = document.querySelector('#input');
// let countryName = null;

// inputCountry.addEventListener(
//   'input',
//   _.debounce(event => (countryName = event.target.value)),
//   500,
// );

// function getCountry(countryName) {
//   let selectedCountry = fetch(
//     `https://restcountries.eu/rest/v2/name/${countryName}`,
//   );
//   return selectedCountry;
// }

// getAddress().then(country => console.log(country));
