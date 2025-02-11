import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => {
    res.send("User Route")
})

export default userRoute