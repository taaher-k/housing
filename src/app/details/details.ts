import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  template: `
              <article><img
                [src]="housingLocation?.photo" alt="Exterior photo of {{housingLocation?.name}}">
                
                <section class="listing-description">

                <h2 class="listing-heading">
                  {{housingLocation?.name}}
                </h2>
                <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
                </section>

                  <section class="listing-features">
                  <h2 class="section-heading">About this location</h2>
                  <ul>
                    <li>Wifi: {{housingLocation?.wifi ? 'Yes' : 'No'}}</li> 
                    <li>Laundry: {{housingLocation?.laundry ? 'Yes' : 'No'}}</li>
                    <li>Available Units: {{housingLocation?.availableUnits}}</li>
                  </ul>
                          </section>

                   <section class="listing-apply">

                    <h2 class="section-heading">Interested in this property Apply now to live here</h2>

                    <form [formGroup]="applyForm" (submit) = "submitApplication()">

                      <label for="firstname">First Name:</label>
                      <input id="firstname" type="text" formControlName="firstname">
                      <label for="lastname">Last Name:</label>
                      <input id="lastname" type="text" formControlName="lastname">
                      <label for="email">Email:</label>
                      <input id="email" type="email" formControlName="email">

                   
                    <button class="primary" type="button">Apply Now</button>
                          </form>
                   </section>       
              </article>

  `,
  styleUrl: './details.css',
})
export class Details {

   route:ActivatedRoute = inject(ActivatedRoute);
   //housingLocationId = 0;
   housingService = inject(HousingService);

   housingLocation:HousingLocation | undefined; 

   applyForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
   });


  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  } 


  submitApplication() {
    this.housingService.submitApplication(

      this.applyForm.value.firstname ?? '',
      this.applyForm.value.lastname ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
