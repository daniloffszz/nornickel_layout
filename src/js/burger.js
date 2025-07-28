let burger
let header

document.addEventListener('DOMContentLoaded', function () {
    burger = document.querySelector('.burger')
    header = document.querySelector('body')

    burger.addEventListener('click', toggleNav)
})

const toggleNav = () => {
    let div
    let nav
    if (document.querySelector('.mobile-nav')) {
        document.querySelector('body').style.overflow = ''
        let headerNav = document.querySelector('.mobile-nav')
        headerNav.style.top = '-100%'
        setTimeout(() => {
            headerNav.remove()
        }, 300)
    } else {
        document.querySelector('body').style.overflow = 'hidden'
        div = document.createElement('div')
        nav = document.querySelector('nav').cloneNode('deep')
        div.classList.add('mobile-nav')
        div.append(nav)
        console.log(div)
        header.appendChild(div)
        setTimeout(() => {
            div.style.top = '62px'
        }, 100)
    }
}