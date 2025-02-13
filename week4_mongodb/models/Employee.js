const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  },
  city:{
    type: String
  },
  designation: {
    type: String
  },
  salary: {
    type: Number
  },
  created: { 
    type: Date
  },
  updatedat: { 
    type: Date
  },
});

//Declare Virtual Fields
EmployeeSchema.virtual('fullname')
    .get(function (){
      return `${this.firstname} ${this.lastname}`
    })
    .set(function (value){
      console.log(`fullname set - ${value}`);
    })

//Custom Schema Methods
//1. Instance Method Declaration
EmployeeSchema.methods.getFullname = function (){
  return `${this.firstname} ${this.lastname}`
}

EmployeeSchema.method.getFormattedSalary = function(){
  return `$${this.salary}`
}


//2. Static method declararion
EmployeeSchema.static("getEmployeeByFirstName", function (fname){
  return this.find({firstname: new RegExp(fname, 'i')})
})


//Writing Query Helpers
EmployeeSchema.query.byFirstName = function(fname){
  return this.where({firstname: new RegExp(fname, 'i')})
}

//middleware

// middleware to run before the findOne operation
EmployeeSchema.pre('findOne', (next) =>{
  console.log(`PRE - findOne`);

  next()
})

// middleware to run after the findOne operation
EmployeeSchema.post('findOne', (doc) =>{
  console.log(`POST - findOne`);
  if (doc) {
    console.log(`POST - doc ${JSON.stringify(doc)}`)
  }
})


EmployeeSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

EmployeeSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;