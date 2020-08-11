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

const themeSwitcher = event => {
  if (!event.target.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    classAdd(`${Theme.LIGHT}`);
    classRemove(`${Theme.DARK}`);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    classAdd(`${Theme.DARK}`);
    classRemove(`${Theme.LIGHT}`);
  }
};

themeSwitch.addEventListener('change', themeSwitcher);

localStorage.getItem('theme') === Theme.DARK
  ? (classAdd(`${Theme.DARK}`), (themeSwitch.checked = true))
  : classAdd(`${Theme.LIGHT}`);

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
