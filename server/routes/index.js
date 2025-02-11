import { Router } from "express";
import userRoute from "./userRouter.js";

const router = Router();

router.use("/user",userRoute);

export default router