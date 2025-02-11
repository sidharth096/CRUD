import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    mobile: {
        type: Number,
        default: null,
    },
    address_details: {
        type: Object,
        default: null
    },

}, {
    timestamps: true
})

const UserModel = mongoose.model("user", userSchema);
export default UserModel