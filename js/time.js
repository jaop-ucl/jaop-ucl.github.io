// import { DateTime } from "https://cdn.skypack.dev/luxon@1.25.0";

// Now
// Notice it uses its own constructor instead of Date
var DateTime = luxon.DateTime

const now = DateTime.now().toUTC()
// Get the hour from today
const hour = DateTime.now().hour
// Add 7 days to now
//const weekAdd = DateTime.plus({days: 7});

// Now formatted like "Monday, November 23, 5pm"
//const dateFormatted = DateTime.toFormat("EEEE',' MMMM d',' ha")
const conference = DateTime {
                              .fromObject({year: 2022, month: 4, day: 27, hour: 14, minute: 05}, { zone: 'Europe/London' })
                              .toFormat("EEEE',' MMMM d',' ha")
                              }
const conferenceutc = DateTime.fromObject({year: 2022, month: 4, day: 27, hour: 14, minute: 05}).toLocaleString(DateTime.DATETIME_FULL)

// Date and time on Lord Howe Island
//const dateTimeLocale = DateTime.setZone('Australia/Lord_Howe')

//Parsing
//const dateTimeParsing1 = DateTime.fromFormat('Jul 8, 2005', 'MMM d, y').toJSDate()
//const dateTimeParsing2 = DateTime.fromFormat('2005-07-08', 'y-MM-dd').toJSDate()
DateTime.now().toFormat('EEEE MMMM dd, yyyy')
conference.toLocaleString(DateTime.DATETIME_FULL)

//document.getElementById("package-link").innerHTML = "Luxon"
//document.getElementById("package-link").href = "https://www.skypack.dev/view/luxon"
document.getElementById('today').innerHTML = now
//document.getElementById('today-hour').innerHTML = hour
document.getElementById('conference-time').innerHTML = conference
document.getElementById('conference-time-utc').innerHTML = conferenceutc
//document.getElementById('week-add').innerHTML = weekAdd
//document.getElementById('date-formatted').innerHTML = dateFormatted
//document.getElementById('date-time-locale').innerHTML = dateTimeLocale
//document.getElementById("date-time-parsing-1").innerHTML = dateTimeParsing1;
//document.getElementById("date-time-parsing-2").innerHTML = dateTimeParsing2;
