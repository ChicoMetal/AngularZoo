import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Title:string = 'Listar admins';
  Number = new Array(10);

  constructor() { }

  ngOnInit() {
  }

}
