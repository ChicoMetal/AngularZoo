import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'Registro';
  nombres: string;
  apellidos: string;
  emailUsuario: string;
  passwordUsuario: string;

  constructor(private _router: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
  }

}
