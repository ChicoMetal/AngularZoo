import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-email-main',
  templateUrl: './email-main.component.html',
  styleUrls: ['./email-main.component.css']
})
export class EmailMainComponent implements OnInit, DoCheck {
  
  title:string = "Email";
  emailContacto:string;
  
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');//leer un dato almacenado de manera global (cookie)
  }

}
