import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailMainComponent } from './email-main/email-main.component';
import { AddEmailComponent } from './add-email/add-email.component';
import { DelEmailComponent } from './del-email/del-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmailMainComponent, AddEmailComponent, DelEmailComponent],
  exports:[EmailMainComponent]
})
export class EmailUserModule { }
