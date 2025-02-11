import UserModel from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, dateOfBirth, gender, email, mobile, aadhar, address, state, district, phone, parentGuardianName, parentGuardianNumber } = req.body;

        if (!firstName || !dateOfBirth || !gender || !email || !mobile || !aadhar || !address || !state || !district) {
            return res.status(400).json({ success: false, message: "Please enter all required fields" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }


        const user = new UserModel({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            email,
            mobile,
            aadhar,
            address,
            state,
            district,
            phone,
            parentGuardianName,
            parentGuardianNumber,
        });

        await user.save();
        res.status(201).json({ success: true, message: "User created successfully", data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
