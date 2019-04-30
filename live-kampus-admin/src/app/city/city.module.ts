import { NgModule } from '@angular/core';
import { CityListComponent } from './city-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CityDetailsComponent } from './city-details.component';

@NgModule({
    declarations: [
        CityListComponent,
        CityDetailsComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        CityListComponent,
        CityDetailsComponent
    ]
})
export class CityModule {

}
