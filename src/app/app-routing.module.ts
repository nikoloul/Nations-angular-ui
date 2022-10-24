import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { MaxGdpCountriesComponent } from './max-gdp-countries/max-gdp-countries.component';

const routes: Routes = [
  { path: 'countries', component: AllCountriesComponent },
  { path: 'countries/languages/:id', component: CountryLanguagesComponent },
  { path: 'countries/maxGdp', component: MaxGdpCountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
