import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';

const adminRoutes: Routes = [
    { 
        path:'admin', component:MainComponent,
        children:[
            {path:'add', component:AddComponent},
            {path:'list', component:ListComponent},
            {path:'edit', component:EditComponent}
        ]//definir rutas hijas
    }
];

@NgModule({
    imports:[RouterModule.forChild( adminRoutes)],
    exports:[RouterModule]
})

export class AdminRouting {}