import { Routes } from '@angular/router';
import { FinanceReportsComponent } from './reports/finance-reports/finance-reports.component';

export const APP_ROUTES: Routes = [
    { path: '', component: FinanceReportsComponent, pathMatch: 'full' }
];
