// using the luxon js file
// https://moment.github.io/luxon/#/zones

// examples : https://moment.github.io/luxon/demo/global.html


var DateTime = luxon.DateTime

const currenttime = DateTime.now().toLocal().toLocaleString(DateTime.DATETIME_FULL)
const conferenceutc = DateTime.utc(2022, 4, 27, 14, 00).toLocaleString(DateTime.DATETIME_FULL)
const conference = DateTime.utc(2022, 4, 27, 14, 00).toLocal().toLocaleString(DateTime.DATETIME_FULL)


const date1 = luxon.DateTime.fromISO("2023-04-27T14:00")
const date2 = luxon.DateTime.now()

const timeuntilconoference = date1.diff(date2, ["years", "months", "days", "hours"]).toFormat("HH 'hours and' mm 'minutes'")

document.getElementById('today').innerHTML = currenttime
document.getElementById('conference-time-utc').innerHTML = conferenceutc
document.getElementById('conference-time').innerHTML = conference
document.getElementById('conference-time-until').innerHTML = timeuntilconoference
