import '../scss/style.scss'
import 'video.js'
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import './burger'
import './cookies'
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        pagination: false,
    });
    splide.mount();

    var splide_parners = new Splide('.our_partners', {
        type: 'loop',
        pagination: true,
        perPage: 3,
        gap: '5.5rem',
        breakpoints: {
            576: { perPage: 1, padding: { left: 0, right: 200 } },
        },
    });
    splide_parners.mount();

    var splide_parners = new Splide('.recomendations', {
        type: 'loop',
        pagination: true,
        perPage: 3,
        gap: '5.5rem',
        breakpoints: {
            576: { perPage: 1, padding: { left: 0, right: 200 }, gap: '7rem' },
        },
    });
    splide_parners.mount();

    var splide_parners = new Splide('.results', {
        type: 'loop',
        pagination: true,
    });
    splide_parners.mount();
});

document.addEventListener('scroll', () => {
    let footer = document.querySelector('footer')
    let footerOffset = footer.getBoundingClientRect().top
    let heightFooter = footer.getBoundingClientRect().height
    if (heightFooter > footerOffset) {
        document.querySelector('#WellbeingNew .wellbeing_wrapper_column .button').style.display = 'none'
    } else {
        document.querySelector('#WellbeingNew .wellbeing_wrapper_column .button').style.display = 'flex'
    }
})