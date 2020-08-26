console.log('Welcome To Employee Wage Problem');
//CONSTANT VALUE
const WORKING_PART_TIME = 1;
const WORKING_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
//Variable
var employeeHrs;
var salary;
var totalSalary = 0;
var totalEmployeeHours = 0;
var totalWorkingDays = 0;
let employeeAttendance;
while (totalEmployeeHours < MAX_HOURS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    employeeAttendance = getWorkingHrs(Math.round(Math.random() * 10) % 3);
    totalEmployeeHours += employeeHrs;
}
totalSalary = (totalEmployeeHours * EMPLOYEE_RATE_PER_HR);
console.log("Wages for a Month :  " + totalSalary);
function getWorkingHrs(attendance) {
    switch (attendance) {
        case WORKING_FULL_TIME:
            employeeHrs = 8;
            break;
        case WORKING_PART_TIME:
            employeeHrs = 4;
            break;
        default:
            employeeHrs = 0;
    }
}
//# sourceMappingURL=app.js.map