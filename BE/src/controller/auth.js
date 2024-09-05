import bcrypt from "bcrypt";
import { userModel } from "../schema/user.js"
import jwt from "jsonwebtoken"

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const response = await userModel.findOne({ email });
        console.log(response);


        if (!response) {
            return res.status(404).send("User not found")
        }

        bcrypt.compare(password, response.password, (err, result) => {
            if (result) {
                const privateKey = "12345"
                const token = jwt.sign({...response}, privateKey, {
                    expiresIn: "1h"
                });
                res.send({ token })
            } else {
                res.status(401).send("Username or password incorrect")
            }
        })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}