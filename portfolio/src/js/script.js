import '../scss/style.scss'

import {initMenu} from './menu';
import {initForm} from './form';
import {initScroll} from './scroll';

function pageLoaded() {
    initMenu();
    initForm();
    initScroll();
}

document.addEventListener("DOMContentLoaded", pageLoaded);