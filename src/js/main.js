import '../css/main.scss'
import {slider} from './slider.js'

slider();

// mobile menu toggle
const menuBtn = document.querySelector('#menuBtn');
const menuEl = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function() {
    menuEl.classList.toggle('header__menu--open');
});