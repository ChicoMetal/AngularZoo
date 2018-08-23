import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {
  
  private emailContacto:string;

  constructor() { }

  ngOnInit() {
  }
  
  setEmailContacto():void{
    localStorage.setItem('emailContacto', this.emailContacto );//crear una variable con su valor de forma global (cookie)
  }

}
