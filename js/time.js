// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html


var DateTime = luxon.DateTime

const now = DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_FULL)
const conference = DateTime.fromObject({year: 2022, month: 4, day: 27, hour: 14, minute: 05}, { zone: 'Europe/London' }).toLocaleString(DateTime.DATETIME_FULL)
const conferenceutc = DateTime.fromObject({year: 2022, month: 4, day: 27, hour: 14, minute: 05}).toLocaleString(DateTime.DATETIME_FULL)

document.getElementById('today').innerHTML = now
document.getElementById('conference-time').innerHTML = conference
document.getElementById('conference-time-utc').innerHTML = conferenceutc
