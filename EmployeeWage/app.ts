console.log('Welcome To Employee Wage Problem');

//CONSTANT VALUE
const EMPLOYEE_IS_PRESENT = 1;

let employeeAttendance = Math.ceil(Math.random()) % 2;
console.log(employeeAttendance);

employeeAttendance === EMPLOYEE_IS_PRESENT ? console.log("Employee Present") : console.log("Employee Absent");
