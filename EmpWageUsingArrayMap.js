///-----UC9 Use the Daily Wage Map andDaily Hour Map performfollowing operations using-----//

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const Working_Per_Hr=20;
let totalEmployeeWage=0;
let empHr=0;
let empHrs = 0;

function GetWorkingHrs(empInput) {
    switch (empInput) {
        case IS_FULL_TIME:
            empHrs = 8;
            console.log("FullTime Employee")
            return empHrs;
        case IS_PART_TIME:
            empHrs = 8;
            console.log("PartTime Employee")
            return empHrs;
        default:
            empHrs = 0;
            console.log("absent")
            return empHrs;
    }
}


function calculateDailyWage(empHr)
{
    return empHr*Working_Per_Hr;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function calcDailyWage(empHrs) {
  return empHrs * Working_Per_Hr;
}
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = GetWorkingHrs(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
  empDailyHrsMap.set(totalWorkingDays, empHrs);
  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
const findTotal = (totalVal, dailyVal) => {
  return totalVal + dailyVal;
};
let totalHours = Array.from(empDailyHrsMap.values()).filter((dailyHours) => dailyHours > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter((dailyWage) => dailyWage > 0).reduce(findTotal, 0);
console.log(
  "UC9A - Emp Wage with Arrow. " +"\n\tTotal Hours: " +totalHours +", Total Wages: " +totalSalary
);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
  if (value == 8) fullWorkingDays.push(key);
  else if (value == 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);