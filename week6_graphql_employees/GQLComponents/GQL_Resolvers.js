const { emailRegex } = require('../constants');
const Employee = require('../models/Employee')

// This file will contain all GraphQL Resolvers
// Resolvers perform the operations to complete Query type or Mutation Type

exports.resolvers = {
    Query: {
        // Operation to find all objects from employees collection and return
        getEmployees: async (parent, args) => {
            return await Employee.find({})
        },
        getEmployeeByCity: async (parent, args) => {
            console.log(`Searching for employees from ${args.city}`);

            const emps =  await Employee.find({city: new RegExp(args.city, 'i')})
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
        getEmployeeByFirstName: async (parent, args) => {
            console.log(`Searching for employees with firstname ${args.firstname}`);

            const emps =  await Employee.find({firstname: new RegExp(args.firstname, 'i')})
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
        getEmployeeByID: async (parent, args) => {
            console.log(`Searching for employees with ID ${args.id}`);

            const emps =  await Employee.findById(args.id)
            console.log(`matching employees : ${JSON.stringify(emps)}`);

            return emps
        },
    },
    Mutation: {
        addEmployee: async(parent, args) => {
            console.log(`Trying to insert employee with email ${args.email}`);

            // const isValidEmail = emailRegex.test(args.email)
            // if (isValidEmail){
            let newEmployee = new Employee({
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                gender: args.gender.toLowerCase(),
                city: args.city,
                designation: args.designation,
                salary: args.salary
            })

            return await newEmployee.save()
            // }else{
            //     console.log(`Email not in valid format`);
            //     throw new Error(`Email not in valid format`)
            // }

        },
        updateEmployee: async(parent, args) => {

            if (!args.id){
                console.log(`ID not provided`);
                return JSON.stringify({status: false, "message" : "Please provide Employee ID to update"})
            }

            console.log(`Trying to update employee id ${args.id}`);

            return await Employee.findOneAndUpdate(
                { _id: args.id },
                {
                    $set: {
                        firstname: args.firstname,
                        lastname: args.lastname,
                        gender: args.gender.toLowerCase(),
                        city: args.city,
                        designation: args.designation,
                        salary: args.salary
                    }
                },
                {new : false},
                (err, employee) => {
                    if (err){
                        console.log(`Could not update employee : ${JSON.stringify(err)}`);
                        return null
                    }else{
                        console.log(`Employee info updated : ${JSON.stringify(employee)}`);
                        return employee
                    }
                }
            )

        },
        deleteEmployee: async(parent, args) => {

            if (!args.id){
                console.log(`ID not provided`);
                return JSON.stringify({status: false, "message" : "Please provide Employee ID to update"})
            }

            console.log(`Trying to delete employee id ${args.id}`);

            return await Employee.findById(args.id)
        }
    }
}