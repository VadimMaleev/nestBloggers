import nodemailer from "nodemailer";
import { Injectable } from "@nestjs/common";


@Injectable()
export class EmailAdapter {
    async sendEmailConfirmationCode(code: string, email: string) {
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bloggersauthmail@gmail.com", // generated ethereal user
                pass: "qpjjtxsurfvalhhh", // generated ethereal password
            },
        });

        await transport.sendMail({
            from: '"Bloggers Api" <bloggersauthmail@gmail.com>',
            to: email,
            subject: 'Confirm Account',
            html:`<a href='https://somesite.com/confirm-email?code=${code}'>Ссылка</a>`
        })
    }
}