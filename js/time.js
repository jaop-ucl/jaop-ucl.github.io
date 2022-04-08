// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html


var DateTime = luxon.DateTime

const currenttime = DateTime.now().toLocal().toLocaleString(DateTime.DATETIME_FULL)
const conferenceutc = DateTime.utc(2022, 4, 27, 13, 00).toLocaleString(DateTime.DATETIME_FULL)
const conference = DateTime.utc(2022, 4, 27, 13, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)


const date1 = luxon.DateTime.fromISO("2023-04-27T13:00")

const diffintime = date1.diff(DateTime.now(), ["years", "months", "days", "hours"])

const days = Math.floor(diffintime.days)
const hours = Math.floor(diffintime.hours)

const actualhours = hours - days*24

const timeuntilconoference = 'Days:' + days + ' Hours:' + hours

document.getElementById('today').innerHTML = currenttime
document.getElementById('conference-time-utc').innerHTML = conferenceutc
document.getElementById('conference-time').innerHTML = conference
document.getElementById('conference-time-until').innerHTML = timeuntilconoference
