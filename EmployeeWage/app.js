console.log('Welcome To Employee Wage Problem');
//CONSTANT VALUE
const WORKING_PART_TIME = 1;
const WORKING_FULL_TIME = 2;
const EMPLOYEE_RATE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
//Variable
var employeeHrs;
var salary;
var totalSalary = 0;
for (let day = 1; day <= NUMBER_OF_WORKING_DAYS; day++) {
    let employeeAttendance = Math.round(Math.random() * 10) % 3;
    switch (employeeAttendance) {
        case WORKING_FULL_TIME:
            employeeHrs = 8;
            break;
        case WORKING_PART_TIME:
            employeeHrs = 4;
            break;
        default:
            employeeHrs = 0;
    }
    salary = (employeeHrs * EMPLOYEE_RATE_PER_HR);
    totalSalary += salary;
}
console.log("Wages for a Month :  " + totalSalary);
//# sourceMappingURL=app.js.map