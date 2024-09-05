import bcrypt from "bcrypt";
import { userModel } from "../schema/user.js"


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await userModel.findOne({ email });

        if (!response) {
            return res.status(404).send("User not found")
        }

        bcrypt.compare(password, response.password, (err, result) => {
            if (result) {
                res.send(response)
            } else {
                res.status(401).send("Username or password incorrect")
            }
        })

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message)
    }
}