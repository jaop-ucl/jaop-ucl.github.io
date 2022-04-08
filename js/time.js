// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html

var DateTime = luxon.DateTime

function updateClock() {
    const currenttime = DateTime.now().toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const conferenceutc = DateTime.utc(2022, 4, 27, 13, 00).toLocaleString(DateTime.DATETIME_FULL)
    const conference = DateTime.utc(2022, 4, 27, 13, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)

    const date1 = DateTime.utc(2022, 4, 27, 13, 00)

    const diffintime = date1.diff(DateTime.now(), ["years", "months", "days", "hours", "minutes", "seconds"])

    const days = Math.floor(diffintime.days)
    const hours = Math.floor(diffintime.hours)
    const minutes = Math.floor(diffintime.minutes)
    const seconds = Math.floor(diffintime.seconds)

    const timeuntilconoference = 'Days:' + days + ' Hours:' + hours + ' Minutes:' + minutes + ' Seconds:' + seconds

    document.getElementById('today').innerHTML = currenttime
    document.getElementById('conference-time-utc').innerHTML = conferenceutc
    document.getElementById('conference-time').innerHTML = conference
    document.getElementById('conference-time-until').innerHTML = timeuntilconoference
}

const version = 8

document.getElementById('version').innerHTML = version

updateClock();
setInterval(updateClock, 1000);
