import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: false, // Optional field
  },
  dateOfBirth: {
    type: String, // Stored as a string (e.g., "18/10/1999")
    required: [true, "Please enter your date of birth"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Non-Binary"], // Only allow these values
    required: [true, "Please select your gender"],
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
  mobile: {
    type: String, // Stored as a string to handle country codes (e.g., "+91 9876543210")
    required: [true, "Please enter your mobile number"],
  },
  aadhar: {
    type: String, // Stored as a string to handle formatting (e.g., "3333 2211 5544 0022")
    required: [true, "Please enter your Aadhar number"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  state: {
    type: String,
    required: [true, "Please enter your state"],
  },
  district: {
    type: String,
    required: [true, "Please enter your district"],
  },
  phone: {
    type: String, // Optional field
    required: false,
  },
  parentGuardianName: {
    type: String, // Optional field
    required: false,
  },
  parentGuardianNumber: {
    type: String, // Optional field
    required: false,
  },
}, {
  timestamps: true, // Adds `createdAt` and `updatedAt` fields
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;