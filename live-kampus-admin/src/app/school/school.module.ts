import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolDetailsComponent } from './school-details.component';
import { SchoolListComponent } from './school-list.component';
import { SchoolEditComponent } from './school-edit.component';
@NgModule({
    declarations:[
        SchoolDetailsComponent,
        SchoolListComponent,
        SchoolEditComponent
    ],
    imports:[BrowserModule],
    exports:[SchoolDetailsComponent,SchoolListComponent, SchoolEditComponent]
})
export class SchoolModule{

}