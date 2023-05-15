import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartItemComponent } from './components/chart-item/chart-item.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// Ng Charts
import { NgChartsModule } from 'ng2-charts';
import { HomeComponent } from './components/home/home.component';
import { GovernComponent } from './components/govern/govern.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { PopulationComponent } from './components/population/population.component';
import { GrossComponent } from './components/gross/gross.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartItemComponent,
    HomeComponent,
    GovernComponent,
    CurrencyComponent,
    PopulationComponent,
    GrossComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
