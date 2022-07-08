import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './services/mail.service';
import { MailController } from './controller/mail.controller';

@Module({
    imports: [
      MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'inf.be.one@gmail.com',
            pass: 'mbryecccppbqailr'
          }
        },

        defaults: {
          from: '"No Reply" <inf.be.one@gmail.com>'
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      }),
    ],
    providers: [MailService],
    exports: [MailService],
    controllers: [MailController]
  })
  export class MailModule { }