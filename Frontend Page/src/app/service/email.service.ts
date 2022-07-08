
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {Email} from '../models/email.interface'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  BASE_URL: string ='http://localhost:3000'
  constructor(private http: HttpClient) { }
  sendEmail(email : Email): Observable<Email>{
    return this.http.post<Email>(`${this.BASE_URL}/api/mail`,email);
  }
}