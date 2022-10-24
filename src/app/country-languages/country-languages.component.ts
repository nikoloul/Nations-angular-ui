import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryType } from '../model/CountryType';
import { LanguageType } from '../model/LanguageType';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent implements OnInit {

  country: CountryType | undefined;
  countryId!: number;
  allLanguages: LanguageType[] = [];

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      this.countryId = params['id']
      this.getCountry(this.countryId);
    });   
  }
  

  getCountry(id: number): void {
    this.countriesService.getCountryById(id).subscribe((data: CountryType) => {
      this.country = data;
      this.allLanguages = this.country.languages
      console.log(this.country)
    });
  }

}
