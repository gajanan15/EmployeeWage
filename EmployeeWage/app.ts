console.log('Welcome To Employee Wage Problem');

//CONSTANT VALUE
const EMPLOYEE_IS_PRESENT = 1;
var EMPLOYEE_RATE_PER_HR = 20;
var EMPLOYEE_HRS = 8;
var salary;

let employeeAttendance = Math.ceil(Math.random()) % 2;

if (EMPLOYEE_IS_PRESENT == employeeAttendance) {
    salary = (EMPLOYEE_HRS * EMPLOYEE_RATE_PER_HR);
    console.log("Employee Daily Wage : " + salary);
}
else {
    salary = 0;
}
