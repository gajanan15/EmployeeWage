console.log('Welcome To Employee Wage Problem');
//CONSTANT VALUE
const WORKING_PART_TIME = 1;
const WORKING_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HR = 20;
//Variable
var employeeHrs;
var salary;
let employeeAttendance = Math.round(Math.random() * 10) % 3;
switch (employeeAttendance) {
    case WORKING_FULL_TIME:
        console.log("Empoyee Working Full Time");
        employeeHrs = 8;
        break;
    case WORKING_PART_TIME:
        console.log("Empoyee Working Part Time");
        employeeHrs = 4;
        break;
    default:
        console.log("Empoyee Absent");
        employeeHrs = 0;
}
salary = (employeeHrs * EMPLOYEE_RATE_PER_HR);
console.log("Employee Daily Wage : " + salary);
//# sourceMappingURL=app.js.map