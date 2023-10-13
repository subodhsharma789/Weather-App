import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { CurrentWeatherComponent } from './tabs/current-weather/current-weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherServiceService } from './weather-service.service';
import { ForecastComponent } from './tabs/forecast/forecast.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'current-weather', pathMatch: 'full' },
      { path: 'current-weather', component: CurrentWeatherComponent },
      { path: 'forecast', component: ForecastComponent },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CurrentWeatherComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
