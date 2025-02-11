import { Router } from "express";
import { createUser, getAllUsers, getUser, updateUser } from "../controller/user.controller.js";

const userRoute = Router();


userRoute.get("/getUser/:id", getUser)
userRoute.post("/create", createUser)
userRoute.post("/updateUser/:id",updateUser)
userRoute.get("/getAllUsers",getAllUsers)

export default userRoute