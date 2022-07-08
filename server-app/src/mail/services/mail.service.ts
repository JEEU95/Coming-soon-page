import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { IEmail } from '../models/mail.interface';

@Injectable()
export class MailService {
    emailValidator = require('deep-email-validator');

    constructor(private readonly mailerService: MailerService) {}

    async sendMail(email:IEmail){
        await this.mailerService.sendMail({
            //to: 'isabel@beoneinternational.com', // recibir información de información
            to: 'inf.be.one@gmail.com', // recibir información de información
            from: '"No Reply" <inf.be.one@gmail.com>', // Para enviar un buzón de correo electrónico
            subject: email.subject,
            template:'./src/templates//mail.hbs',
            context: {email: email.email}
        })
    }
    async isEmailValid(email) {
        return this.emailValidator.validate(email)
    }

}