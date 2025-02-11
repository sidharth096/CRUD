import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please enter all required fields" });
        }

        const existingUser = await UserModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const payload = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }

        const user = new UserModel(payload);
        await user.save();

        res.status(201).json({ success: true, message: "User created successfully",data:user });
    } catch (error) {
        res.status(400).json({ message: error.message });
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
        res.status(400).json({ message: error.message });
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
        res.status(400).json({ message: error.message });
    }
};