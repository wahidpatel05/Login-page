import mongoose from 'mongoose';


const Register = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", Register);

