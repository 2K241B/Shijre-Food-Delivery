import { Router } from "express";
import { sendMail, verifyOTP } from "../controller/mail.js";

const mailRouter = Router();

mailRouter.post("/", sendMail)
    .post("/verifyOTP", verifyOTP);

export { mailRouter }