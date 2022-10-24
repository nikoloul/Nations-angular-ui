import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { MaxGdpCountriesComponent } from './max-gdp-countries/max-gdp-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CountryLanguagesComponent,
    MaxGdpCountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
