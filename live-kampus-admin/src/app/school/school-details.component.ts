import { Component } from '@angular/core';

@Component({
    selector:"school-details",
    templateUrl:"./school-details.component.html",
    styleUrls:["./school-details.component.css"]
})
export class SchoolDetailsComponent {
    schools = 
        {
            "schoolId": 101,
            "name": "DYPIEMR",
            "city": "Mumbai",
            "state": "Maharashtra"
        }

    
}