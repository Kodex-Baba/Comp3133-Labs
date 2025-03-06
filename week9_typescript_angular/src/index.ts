import Student from "./Student";
import Employee from "./Employee";
import PartTimeEmployee from "./PartTimeEmployee";

console.log(`Week 09 - Intro to Typescript\n`)

console.log(`Working with student Class`);

//creating an instance of student class
var stud1 = new Student(1, "Johan", "Johnson", 80)
stud1.showDetails();

var stud2 = new Student(2, "Light", "Yagami", 100)
stud2.showDetails();

var emp1 = new Employee("Izuku", "Midoriya", 101, 100000)
emp1.showInfo()

//console.log(`Salary: ${emp1.salary}`)
console.log(`Tax: ${emp1.calculateTax()}`)

emp1.firstName = "Deku";

//Error - department' is protected and only accessible within class 'Employee' and its subclasses
//emp1.department = "HR"

//Error - empID' is private and only accessible within class 'Employee'
//emp1.empID = 102

//Error - Cannot assign

let pEmp1 = new PartTimeEmployee("Naruto", "Uzumaki", 201, 0, 40, 20)

pEmp1.getSalary()
pEmp1.showInfo()

console.log(`Salary: ${pEmp1.getSalary()}`)
console.log(`Tax: ${pEmp1.calculateTax()}`)