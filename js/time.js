// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html


var DateTime = luxon.DateTime

const currenttime = DateTime.now().toLocal().toLocaleString(DateTime.DATETIME_FULL)
const conferenceutc = DateTime.utc(2022, 4, 27, 14, 00).toLocaleString(DateTime.DATETIME_FULL)
const conference = DateTime.utc(2022, 4, 27, 14, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)


const date1 = luxon.DateTime.fromISO("2020-09-06T12:00")
const date2 = luxon.DateTime.fromISO("2019-06-10T14:00")

const timeuntilconoference = conference.diff(currenttime, ["years", "months", "days", "hours"]).toFormat("HH 'hours and' mm 'minutes'")

document.getElementById('today').innerHTML = currenttime
document.getElementById('conference-time-utc').innerHTML = conferenceutc
document.getElementById('conference-time').innerHTML = conference
document.getElementById('conference-time-until').innerHTML = timeuntilconoference
