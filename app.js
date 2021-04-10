const newYear = "1 Jan 2022"

const countDown = () => {

    const cdDays = document.getElementById('days') // days, hrs , mins , secs
    const cdHrs = document.getElementById('hrs')
    const cdMins = document.getElementById('mins')
    const cdSecs = document.getElementById('secs')

    const newYearDate = new Date(newYear)
    console.log(newYearDate)
    const currentDate = new Date()


    const seconds = (newYearDate - currentDate) / 1000
    const days = Math.floor(seconds/3600/24)
    const hours = Math.floor(seconds / 3600) % 24 
    const minutes = Math.floor(seconds / 60) % 60

    const secs = Math.floor(seconds) % 60

    cdDays.innerText = days
    cdHrs.innerText = hours
    cdMins.innerText = minutes
    cdSecs.innerText = secs

    console.log(days, hours , minutes , secs)

}

countDown();
setInterval(countDown, 1000);