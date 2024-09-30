import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  sendMessage(){

    this.submitted = true; 
  
    this.name = ' ';
    this.email = ' ';
    this.subject = ' ';
    this.message = ' ';
  }

}
