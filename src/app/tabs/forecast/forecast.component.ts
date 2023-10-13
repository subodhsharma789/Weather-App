import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/weather-service.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  cityName: string = '';
  data: any;
  listDataOfDate: any;
  constructor(private weatherService: WeatherServiceService) {}
  ngOnInit(): void {
    if (this.weatherService.getCity()) {
      this.searchWeather();
    }
  }

  searchWeather() {
    this.weatherService.getForecast().subscribe((data: any) => {
      this.data = data;
      this.listDataOfDate = data.list;
      // this.temperature = data.main.temp;
      // this.weatherDescription = data.weather[0].description;
      // this.weatherIcon = data.weather[0].icon;
      console.log(this.data);
    });
  }
}
