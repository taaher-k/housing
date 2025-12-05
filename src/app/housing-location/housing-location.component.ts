import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  template: `
    <section class="listing">
        <img [src]="housingLocation.photo" 
         alt="Exterior photo of {{housingLocation.name}}"
         class="listing-photo">

        <h2 class="listing-heading">
          {{housingLocation.name}}
        </h2>

        <p class="listing-location">

          {{housingLocation.state}},
          {{housingLocation.city}}
         
        </p>
          <a [routerLink]="['/Details/',housingLocation.id]">see more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationcomponent {   
   @Input()housingLocation!: HousingLocation;

}
