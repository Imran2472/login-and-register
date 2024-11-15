import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "user"
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User", UserSchema)

export default User;
