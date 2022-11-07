import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs();
    calc();
    cards();
    timer();
    slider();
    modal('[data-modal]', '.modal', modalTimerId);
    forms(modalTimerId);

});