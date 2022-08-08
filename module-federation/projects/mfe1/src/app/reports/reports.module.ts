import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FinanceReportsComponent } from './finance-reports/finance-reports.component';
import { REPORTS_ROUTES } from './reports.routes';
import { AngularMaterialModule } from 'projects/shared/src/lib/material.module';
import { SharedService } from 'projects/shared/src/lib/shared.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forChild(REPORTS_ROUTES)
  ],
  declarations: [
    FinanceReportsComponent
  ],
  providers: [
    HttpClientModule,
    SharedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReportModule { }
