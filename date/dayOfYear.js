// Task 3.1 //Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year, return the day-number of the year. All input strings in the tests are valid dates.

function daysOfYear(date) {
  const startDate = new Date(date.getFullYear(), 0, 1, 4);
  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const difference = date - startDate + oneDayMilliseconds;
  const result = Math.round(difference / oneDayMilliseconds);

  return result;
}
const checkOneDate = new Date("12/13/2020");
const checkTwoDate = new Date("12/17/2020");
const checkThreeDate = new Date("11/16/2020");
const checkFourDate = new Date("1/9/2019");
const checkFiveDate = new Date("3/1/2004");
const checkSixDate = new Date("12/31/2000");

console.log(daysOfYear(checkOneDate));    // 348 days
console.log(daysOfYear(checkTwoDate));    // 352 days
console.log(daysOfYear(checkThreeDate));  // 321 days
console.log(daysOfYear(checkFourDate));   // 9   days
console.log(daysOfYear(checkFiveDate));   // 61  days
console.log(daysOfYear(checkSixDate));    // 366 days