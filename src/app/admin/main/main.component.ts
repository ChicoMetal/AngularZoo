import { Component, OnInit } from '@angular/core';

import { ListComponent } from '../list/list.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Title:string = 'Admin panel';
  
  constructor() { }

  ngOnInit() {
  }

}
