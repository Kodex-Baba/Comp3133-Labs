export default class Student{
    id: Number
    firstName: String
    lastName: String = "NA"
    result: Number

    /*
    class attributes must be initialized with default value or in the constructor
    */
    constructor(id: Number, firstName: String, lastName: String, result: Number){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.result = result
    }//constructor

    showDetails(){
        console.log(`Student Details: \n
            ID: ${this.id}\n
            First Name: ${this.firstName}\n
            Last Name: ${this.lastName}\n
            Result: ${this.result}`);
    }//showDetails
}