import nodemailer from "nodemailer";


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
    try {

        const Info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <st21aye@gmail.com>', // sender address
            to: "dddelgersaihan@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello World</b>", // html body
        });

        if (Info.messageId) {
            res.status(200).send({success: true})
        } else {
            res.status(404).send({ error: "Message didn't send" })
        }
    } catch (error) {
        res.status(404).send({ error: error })
        console.error(error);
    }
}