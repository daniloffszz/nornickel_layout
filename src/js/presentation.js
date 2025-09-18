import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.splide')) {
        new Splide('.splide', {
            perPage: 1
        }).mount();
    }
});
