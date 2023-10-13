import { Component } from '@angular/core';
import { WeatherServiceService } from 'src/app/weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  cityName: string = '';
  temperature!: number;
  weatherDescription!: string;
  weatherIcon!: string;

  constructor(private weatherService: WeatherServiceService) {}

  searchWeather() {
    if (this.cityName.trim() === '') {
      // Handle empty input
      alert('Please enter a city name.');
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe(
      (data: any) => {
        this.temperature = data.main.temp;
        this.weatherDescription = data.weather[0].description;
        this.weatherIcon = data.weather[0].icon;
        console.log(this.weatherIcon);
      },
      (error) => {
        if (error.status === 404) {
          alert('City not found. Please check the city name.');
        } else {
          alert('An error occurred. Please try again later.');
        }
        console.error(error);
      }
    );
  }
}
