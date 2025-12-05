import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingLocationcomponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationcomponent],
  template: `
    <section >
      <form action="">
         <input type="text" placeholder="Filter by city">
         <button class="primary" type="button">
          search
         </button>

      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
 housingLocationList: HousingLocation[] = [];
  //= this.housingService.getAllHousingLocations(
housingService:HousingService = inject(HousingService);
constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();

}

}