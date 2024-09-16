import nodemailer from "nodemailer";
import { userModel } from "../schema/user.js"
import { otpModel } from "../schema/otp.js"

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "st21aye@gmail.com",
        pass: "rqpx kpje xnqo qnbe",
    },
});

export const sendMail = async (req, res) => {
    const { email } = req.body;
    try {
        const user = userModel.findOne({ email });

        if (!user) return res.status(404).json("User not found");

        const generatedOTP = Math.floor(Math.random() * 9000 + 1000);

        await otpModel.create({ email, oneTimePass: generatedOTP });

        const mailOptions = {
            from: '"Food Delivery Project" <st21aye@gmail.com>',
            to: email,
            subject: "Password Reset OTP",
            text: `Your One Time Password is: ${generatedOTP}. This Password will expire in 5 minutes.`
        }

        const Info = await transporter.sendMail(mailOptions);

        if (Info.messageId) {
            res.status(200).send({ success: true })
        } else {
            res.status(404).send({ error: "Message didn't send" })
        }
    } catch (error) {
        res.status(404).send({ error: error })
        console.error(error);
    }
}