import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './finance-reports/finance-reports.component';
import { REPORTS_ROUTES } from './reports.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(REPORTS_ROUTES)
  ],
  declarations: [
    ReportComponent
  ]
})
export class ReportModule { }
