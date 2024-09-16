import { Router } from "express";
import { passwordReset } from "../controller/mail.js";

const passwordRouter = Router();

passwordRouter.put("/", passwordReset);

export { passwordRouter }