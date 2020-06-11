import './styles.css';
import './js/changetheme.js';
import data from './menu.json';
import itemRecipe from './templates/itemRecipe.hbs';
const list = document.querySelector('.js-menu');
const allLi = data.map(item => itemRecipe(item)).join('');
list.insertAdjacentHTML('beforeend', allLi);
