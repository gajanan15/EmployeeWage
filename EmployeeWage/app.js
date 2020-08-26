console.log('Welcome To Employee Wage Problem');
//CONSTANT VALUE
const WORKING_PART_TIME = 0;
const WORKING_FULL_TIME = 1;
const EMPLOYEE_RATE_PER_HR = 20;
//Variable
var employeeHrs;
var salary;
let employeeAttendance = Math.round(Math.random()) % 2;
if (WORKING_FULL_TIME == employeeAttendance) {
    employeeHrs = 8;
}
else if (WORKING_PART_TIME == employeeAttendance) {
    employeeHrs = 4;
}
else {
    employeeHrs = 0;
}
salary = (employeeHrs * EMPLOYEE_RATE_PER_HR);
console.log("Employee Daily Wage : " + salary);
//# sourceMappingURL=app.js.map