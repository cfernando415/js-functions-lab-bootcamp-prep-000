// write your code below!

function happyHolidays () {
  return "Happy holidays";
}

function happyHolidaysTo(string) {
  return "Happy holidays, " + string + "!";
}

function happyHolidayTo(string holiday, string name) {
  return "Happy " + '${holiday}' + ", " + this.'${name}' + "!"
}

function holidayCountdown(string holiday, var days) {
  return "It\'s " + days + " days until " + holiday +"!"
}