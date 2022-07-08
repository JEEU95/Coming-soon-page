import { Component, OnInit } from '@angular/core';
import { Email } from '../models/email.interface';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public email:any
  public send: number=0
  context:Email={email:'',subject:''}
  constructor(private apiService: EmailService) { }

  ngOnInit(): void {
  }
  sendEmail(){
    this.send=0
    if(this.email){
      
      this.context.subject='Notificación de la página Be One'
      this.context.email=this.email
      this.apiService.sendEmail(this.context)
    .subscribe(
      res => { 
        this.send=1
        console.log(res)  
        },
      err =>{
        this.send=2
        console.log(err)
        }
            )
    }

  }
}
