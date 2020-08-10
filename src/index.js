import './styles.css';
import items from './menu.json';
console.log(items);

const body = document.querySelector('body');
const menuList = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-control');
const classes = body.classList;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = event => {
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    classes.add(`${Theme.LIGHT}`);
    classes.remove(`${Theme.DARK}`);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    classes.add(`${Theme.DARK}`);
    classes.remove(`${Theme.LIGHT}`);
  }
};

themeSwitch.addEventListener('click', themeSwitcher);

localStorage.getItem('theme') === 'dark-theme'
  ? body.classList.add(`${Theme.DARK}`)
  : body.classList.add(`${Theme.LIGHT}`);

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
