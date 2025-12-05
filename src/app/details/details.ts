import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing';



@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works!{{housingLocation?.id}}

    </p>
    
  `,
  styleUrl: './details.css',
})
export class Details {

   route:ActivatedRoute = inject(ActivatedRoute);
   //housingLocationId = 0;
   housingService = inject(HousingService);

   housingLocation:HousingLocation | undefined; 


  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  } 
}
