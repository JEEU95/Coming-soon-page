import { Body, Controller, Get, Post } from '@nestjs/common';
import { IEmail } from '../models/mail.interface';
import { MailService } from '../services/mail.service';

@Controller('mail')
export class MailController {
    
    constructor(private readonly mailService: MailService) {}

    @Post()
    async messageEmail(@Body() email:IEmail){
        let val = await this.mailService.isEmailValid(email.email)
        if(val.valid){
            await this.mailService.sendMail(email);
            return {message:'success'}   
        }else{
            return "error"
        }
    }
}