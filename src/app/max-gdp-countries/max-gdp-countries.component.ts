import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-max-gdp-countries',
  templateUrl: './max-gdp-countries.component.html',
  styleUrls: ['./max-gdp-countries.component.css']
})
export class MaxGdpCountriesComponent implements OnInit {

  maxGdpCountries : any[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getMaxGdpCountries();
  }

  getMaxGdpCountries(): void {
    this.countriesService.getCountryWithMaxGdp().subscribe((data: any[]) => {
      this.maxGdpCountries = data;
      console.log(this.maxGdpCountries)
    });
  }
  

}
