import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ReportModule } from './reports/reports.module';
import { APP_ROUTES } from './app.routes';
import { AngularMaterialModule } from 'projects/shared/src/lib/material.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReportModule,
    AngularMaterialModule,
    MatIconModule,
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
