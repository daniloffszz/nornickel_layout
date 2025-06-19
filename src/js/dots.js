let dots = document.querySelectorAll('.pulse_dot')
let popups = document.querySelectorAll('.popup')

for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.addEventListener('click', (el) => {
        let popupId = el.target.getAttribute('data-popup')
        document.querySelector('.popup[data-popup="' + popupId + '"]').style.display = 'flex'
        for (let i = 0; i < popups.length; i++) {
            const popup = popups[i];
            if (popup.getAttribute('data-popup') != popupId) {
                popup.style.display = 'none'
            }
        }
    })
}

document.querySelector('body').addEventListener('click', (el) => {
    if (!el.target.classList.value.includes('pulse_dot')) {
        for (let i = 0; i < popups.length; i++) {
            const popup = popups[i];
            popup.style.display = 'none'
        }
    }
})