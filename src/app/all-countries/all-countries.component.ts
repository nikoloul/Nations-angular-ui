import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryType } from '../model/CountryType';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: CountryType[] = [];

  constructor(private countriesService: CountriesService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }
  

  getCountries(): void {
    this.countriesService.getAllCounties().subscribe((data: CountryType[]) => {
      this.countries = data;
      console.log(this.countries)
    });
  }

  showLanguages(id:number) {
    this.router.navigate(['/countries/languages', id])
  }

}
