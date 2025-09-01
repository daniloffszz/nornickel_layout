const endDate = 1756801950388
let seconds, minutes, hours, days
const secondsElement = document.getElementById('Seconds')
const minutesElement = document.getElementById('Minutes')
const hoursElement = document.getElementById('Hours')
const daysElement = document.getElementById('Days')

const getDate = async () => {
    const ms = 1756801950388 - new Date()
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    seconds = Math.floor((ms % (60 * 1000)) / 1000);
    setDate()
    setTimeout(() => {
        getDate()
    }, 1000)
}

const setDate = () => {
    secondsElement.innerText = seconds
    minutesElement.innerText = minutes
    hoursElement.innerText = hours
    daysElement.innerText = days
}

getDate()