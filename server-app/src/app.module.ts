import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
