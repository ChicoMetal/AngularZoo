import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';
import { AdminRouting } from "./admin.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRouting
  ],
  declarations: [
    ListComponent, 
    AddComponent, 
    EditComponent, 
    MainComponent
  ],
  exports:[ MainComponent]
})
export class AdminModule { }
