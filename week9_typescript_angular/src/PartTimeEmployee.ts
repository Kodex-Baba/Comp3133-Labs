import Employee from "./Employee";

//PartTimeEmployee class inherits Employee class
export default class PartTimeEmployee extends Employee{
    hoursWorked: number;
    hourlyRate: number;

    constructor(firstName: string,
                lastName: string, empID: number, salary: number, hoursWorked: number, hourlyRate: number){
        // call the parent class constructor using super keyword
        super(firstName, lastName, empID, salary);

        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    //Method overriding
    showInfo(): void {
        console.log(`Part Time Employee Details: \n`)
        super.showInfo()
        console.log(`
            Hours Worked: ${this.hoursWorked}
            Hourly Rate: ${this.hourlyRate}`);
    }

    setSalary(): void {
        this.salary = (this.hoursWorked * this.hourlyRate);
    }

    //Method overriding - modifying the super class method
    getSalary(): Number {
        return (this.hoursWorked * this.hourlyRate);
    }

    //Method overriding
    calculateTax(): Number {
        return (this.salary * 0.10);
    }
}