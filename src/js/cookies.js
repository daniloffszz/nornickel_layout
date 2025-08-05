if (!localStorage.getItem('cookies')) {
    if (document.querySelector('.cookies')) {
        document.querySelector('.cookies').style.display = 'flex'
    }
}

if (document.querySelector('.cookies')) {
    document.querySelector('.cookies button').addEventListener('click', () => {
        localStorage.setItem('cookies', true)

        document.querySelector('.cookies').style.display = 'none'

    })
}