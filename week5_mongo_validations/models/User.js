const mongoose = require('mongoose');

const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

//Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [50, "Username cannot be more that 50 characters"],
        trim: true
    },
    username: {
        type: String,
        required: [true, "username is required"],
        minLength: [4, "Username must be at least 4 characters"],
        maxLength: [20, "Username cannot be more that 20 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        maxLength: [100, "Username cannot be more that 100 characters"],
        lowercase: true,
        match: [emailRegEx, "Email format is invalid. Must be XXX@XXX.XXX"]
    },
    address: {
        street: {
            type: String,
            required: [true, "street is required"],
        },
        suite: {
            type: String,
            required: [true, "Suite is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
            match: [cityRegEx, "City name can only have letter and  spaces."]
        },
        zipcode: {
            type: String,
            required: [true, "Postal Code is required"],
            match: [zipRegEx, "Postal code format is required"],
            uppercase: true
        },
        geo: {
            lat: {
                type: String,
                required: [true, "Latitude is required"],
            },
            lng: {
                type: String,
                required: [true, "Longitude is required"],
            }
        }
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        match: [phoneRegEx, "Phone number format is invalid"]
    },
    website: {
        type: String,
        required: [true, "Web address is required"],
        match: [webRegEx, "Website URL format is invalid"]
    },
    company: {
        name: {
            type: String,
            required: [true, "Company name is required"],
        },
        catchPhrase: {
            type: String,
            required: [true, "Company catchphrase is required"],
        },
        bs: {
            type: String,
            required: [true, "Company business slogan is required"],
        }
    },
    createdAt: { 
        type: Date,
    },
    updatedAt: { 
        type: Date,
    },
  });

UserSchema.pre('save', function(next) {
    User.findOne({email: this.email}, (err, document) => {
        console.log(`Trying to save user with email: ${this.email}`);

        if(err){
            console.log(`Can't find the document`)
        }
        if(document){
            console.log(`User already exist. Can't insert.`)
            next(`User with email ${this.email} already exist. Can't insert`)
            return false
        }else{
            console.log(`User DOESN'T exist. Creating new document`)
            this.createdAt = Date.now()
            this.updatedAt = Date.now()
            next()
        }
    })
})

const User = mongoose.model("User", UserSchema);
module.exports = User;