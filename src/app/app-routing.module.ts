import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './tabs/current-weather/current-weather.component';
import { ForecastComponent } from './tabs/forecast/forecast.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
