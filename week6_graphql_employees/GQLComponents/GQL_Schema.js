const { gql } = require('apollo-server-express')

// create and export type definitions for GraphQL

exports.typeDefs = gql `
    #GraphQL object type - defines representation of model

    #  use ! to indicate required fields

    type Employee{
        id : ID!
        firstname : String!
        lastname : String!
        email : String!
        gender : String!
        city : String!
        designation : String!
        salary : Float!
    }

    #Query type - defines operations for retrieving data

    type Query {
        getEmployees : [ Employee ]

        getEmployeeByCity(city: String!) : [ Employee ]

        getEmployeeByFirstName(firstname : String!) : [ Employee ]

        getEmployeeByID ( id: ID! ) : Employee
    }

    #Mutation type - defined operations for modifying the data e.g. Insert, Update, Delete

    type Mutation {
        addEmployee(
            firstname : String!
            lastname : String!
            email : String!
            gender : String!
            city : String!
            designation : String!
            salary : Float!
        ) : Employee

        updateEmployee(
            id: ID!
            firstname : String!
            lastname : String!

            gender : String!
            city : String!
            designation : String!
            salary : Float!
        ) : Employee

        deleteEmployee(id: ID!) : Employee
    }

`
//end of gql