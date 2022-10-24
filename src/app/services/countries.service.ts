import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryType } from '../model/CountryType';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countriesUrl = '/api/countries';

  constructor(private http: HttpClient) { }

  getAllCounties() {
    return this.http.get<CountryType[]>(this.countriesUrl);
  }

  getCountryById(id : number){
    return this.http.get<CountryType>(this.countriesUrl + "/" + id);
  }

  getCountryWithMaxGdp(){
    return this.http.get<any[]>(this.countriesUrl + "/maxGdp");
  }
  
  
}
