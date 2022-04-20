// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html

var DateTime = luxon.DateTime

function updateClock() {
    const wait = DateTime.utc(2022, 4, 27, 13, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const intro = DateTime.utc(2022, 4, 27, 13, 10).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const keynote1 = DateTime.utc(2022, 4, 27, 13, 20).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const spotlight = DateTime.utc(2022, 4, 27, 14, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const tbreak = DateTime.utc(2022, 4, 27, 14, 20).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const keynote2 = DateTime.utc(2022, 4, 27, 14, 35).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const breakout = DateTime.utc(2022, 4, 27, 15, 15).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const present = DateTime.utc(2022, 4, 27, 16, 25).toLocal().toLocaleString(DateTime.DATETIME_FULL)
    const close = DateTime.utc(2022, 4, 27, 16, 40).toLocal().toLocaleString(DateTime.DATETIME_FULL)

    const waitutc = DateTime.utc(2022, 4, 27, 13, 00).toLocaleString(DateTime.DATETIME_FULL)
    const introutc = DateTime.utc(2022, 4, 27, 13, 10).toLocaleString(DateTime.DATETIME_FULL)
    const keynote1utc = DateTime.utc(2022, 4, 27, 13, 20).toLocaleString(DateTime.DATETIME_FULL)
    const spotlightutc = DateTime.utc(2022, 4, 27, 14, 00).toLocaleString(DateTime.DATETIME_FULL)
    const tbreakutc = DateTime.utc(2022, 4, 27, 14, 20).toLocaleString(DateTime.DATETIME_FULL)
    const keynote2utc = DateTime.utc(2022, 4, 27, 14, 35).toLocaleString(DateTime.DATETIME_FULL)
    const breakoututc = DateTime.utc(2022, 4, 27, 15, 15).toLocaleString(DateTime.DATETIME_FULL)
    const presentutc = DateTime.utc(2022, 4, 27, 16, 25).toLocaleString(DateTime.DATETIME_FULL)
    const closeutc = DateTime.utc(2022, 4, 27, 16, 40).toLocaleString(DateTime.DATETIME_FULL)

    const date1 = DateTime.utc(2022, 4, 27, 13, 00)

    const diffintime = date1.diff(DateTime.now(), ["years", "months", "days", "hours", "minutes", "seconds"])

    const days = Math.floor(diffintime.days)
    const hours = Math.floor(diffintime.hours)
    const minutes = Math.floor(diffintime.minutes)
    const seconds = Math.floor(diffintime.seconds)

    document.getElementById('wait').innerHTML = wait
    document.getElementById('intro').innerHTML = intro
    document.getElementById('keynote1').innerHTML = keynote1
    document.getElementById('spotlight').innerHTML = spotlight
    document.getElementById('break').innerHTML = tbreak
    document.getElementById('keynote2').innerHTML = keynote2
    document.getElementById('breakout').innerHTML = breakout
    document.getElementById('presentation').innerHTML = present
    document.getElementById('close').innerHTML = close

    document.getElementById('waitutc').innerHTML = waitutc
    document.getElementById('introutc').innerHTML = introutc
    document.getElementById('keynote1utc').innerHTML = keynote1utc
    document.getElementById('spotlightutc').innerHTML = spotlightutc
    document.getElementById('breakutc').innerHTML = tbreakutc
    document.getElementById('keynote2utc').innerHTML = keynote2utc
    document.getElementById('breakoututc').innerHTML = breakoututc
    document.getElementById('presentationutc').innerHTML = presentutc
    document.getElementById('closeutc').innerHTML = closeutc

    document.getElementById('days').innerHTML = pad(days)
    document.getElementById('hours').innerHTML = pad(hours)
    document.getElementById('minutes').innerHTML = pad(minutes)
    document.getElementById('seconds').innerHTML = pad(seconds)
}

function pad(value) {
    if(value <10) {
        return '0' + value
    }
    else
    {
        return value
    }
}

const version = 9

document.getElementById('version').innerHTML = version

updateClock();
setInterval(updateClock, 1000);
