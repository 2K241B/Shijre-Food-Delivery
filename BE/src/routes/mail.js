import { Router } from "express";
import { sendMail } from "../controller/mail.js";


const mailRouter = Router();

mailRouter.get("/", sendMail);

export { mailRouter }