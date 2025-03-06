import IPerson from "./IPerson";

export default class Employee implements IPerson{
    /*
        primitive types - number, bigint, string, boolean, symbol, null, undefined
        Wrapper objects - Number, BigInt, String, Boolean, Symbol
    */
    firstName: string; //public property by default, accessed from anywhere
    lastName: string;
    readonly department: string = "IT" //protected property, accessed within the class and its subclasses
    private empID : number //private property, accessed only within the class; CANNOT be accessed even in subclasses
    protected salary : number
    //readonly salary : number //readonly property, cannot be modified; can be assinged only once
    // private readonly salary : number //private readonly property, cannot be modified; can be assinged only once

    constructor(firstName: string, lastName: string, empID: number, salary: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.empID = empID;
        this.salary = salary;
    }

    showInfo(): void {
        console.log(`Employee Details: \n
            First Name: ${this.firstName}\n
            Last Name: ${this.lastName}\n
            Employee ID: ${this.empID}\n
            Salary: ${this.salary}`);
    }

    getSalary(): Number {
        return this.salary;
    }

    calculateTax(): Number {
        return (this.salary * 0.15);
    }

}