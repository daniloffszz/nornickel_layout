if (!localStorage.getItem('cookies')) {
    document.querySelector('.cookies').style.display = 'flex'
}

document.querySelector('.cookies button').addEventListener('click', () => {
    localStorage.setItem('cookies', true)
    document.querySelector('.cookies').style.display = 'none'
})