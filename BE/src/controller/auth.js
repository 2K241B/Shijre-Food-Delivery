import bcrypt from "bcrypt";
import { userModel } from "../schema/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const Login = async (req, res) => {
    const { email, password } = req.body;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).send({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(403).send({ message: "Username or password incorrect" });

        const token = jwt.sign({ user }, PRIVATE_KEY);

        res.status(200).cookie("token", token).end();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}