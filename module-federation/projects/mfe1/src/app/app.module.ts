import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReportModule } from './reports/reports.module';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from 'projects/shared/src/lib/shared.module';
import { AngularMaterialModule } from 'projects/shared/src/lib/material.module';
import { SharedService } from 'projects/shared/src/lib/shared.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReportModule,
    AngularMaterialModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
