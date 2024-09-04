import { userModel } from "../schema/user.js"

export const createUser = async (req, res) => {
    const { email, name, password, phoneNumber, role } = req.body;

    try {
       const response = await userModel.create({ email, name, password, phoneNumber, role })
       res.status(200).json(response)
    } catch (error) {
        console.error(error)
    }
}