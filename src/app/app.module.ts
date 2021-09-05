import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PatientMatCardComponent } from './list-patients/patient-mat-card/patient-mat-card.component';

@NgModule({
  declarations: [AppComponent, ListPatientsComponent, PatientMatCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
