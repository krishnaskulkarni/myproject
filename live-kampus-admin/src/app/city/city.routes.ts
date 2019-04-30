
import{Routes} from "@angular/router"
import { CityListComponent } from './city-list.component';
import { CityDetailsComponent } from './city-details.component';
export const bookRoutes: Routes=[
    {path: "books/:category",component:CityListComponent},
    {path: "book/:bookId",component:CityDetailsComponent}
]