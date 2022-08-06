import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinanceReportsComponent } from './finance-reports/finance-reports.component';
import { REPORTS_ROUTES } from './reports.routes';
import { AngularMaterialModule } from 'projects/shared/src/lib/material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(REPORTS_ROUTES)
  ],
  declarations: [
    FinanceReportsComponent
  ]
})
export class ReportModule { }
