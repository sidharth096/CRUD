import { Router } from "express";
import { createUser, getUser, updateUser } from "../controller/user.controller.js";

const userRoute = Router();


userRoute.get("/getUser/:id", getUser)
userRoute.post("/create", createUser)
userRoute.post("/updateUser/:id",updateUser)

export default userRoute