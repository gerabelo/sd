import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})

export class WsPontosService implements OnInit {

  public urlAPI: string = '';

  constructor(public http: HttpClient) {
    this.urlAPI = 'https://restcountries.eu/rest/v1/all';
  }

  ngOnInit() {}

  public getDataFromApi(): Observable<Pais[]> {
//    let httpParams = new HttpParams();
//    let httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
//    return this.http.get<Pais[]>(this.urlAPI, { headers: httpHeaders});
    return this.http.get<Pais[]>(this.urlAPI);
  }  
}