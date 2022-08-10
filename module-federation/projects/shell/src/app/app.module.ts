import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TravelsComponent } from './travels/travels.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularMaterialModule } from 'projects/shared/src/lib/material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    TravelsComponent,
    NotFoundComponent
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
