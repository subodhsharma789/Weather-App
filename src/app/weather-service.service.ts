import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  private baseforecastURL =
    'https://api.openweathermap.org/data/2.5/forecast?q=';

  private apiKey = '&units=metric&APPID=635427f35334649b007bd1369f7857d1';
  cityName: string | undefined;

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    this.cityName = cityName;
    console.log((this.cityName = cityName));
    return this.http.get(this.baseWeatherURL + cityName + this.apiKey);
  }

  getForecast(): Observable<any> {
    return this.http.get(this.baseforecastURL + this.cityName + this.apiKey);
  }
  getCity() {
    return this.cityName;
  }
}
