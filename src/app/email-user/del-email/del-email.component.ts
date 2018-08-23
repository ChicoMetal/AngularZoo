import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-del-email',
  templateUrl: './del-email.component.html',
  styleUrls: ['./del-email.component.css']
})
export class DelEmailComponent implements OnInit, DoCheck {
  emailContacto:string;
  constructor() { }
  
  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit() {
  }

  delEmailContacto(){
    localStorage.removeItem('emailContacto');//remover un elemento gloval (cookie)
    localStorage.clear();//limpiar todo el localStorage (cookies)
    this.emailContacto = null;
  }

}
