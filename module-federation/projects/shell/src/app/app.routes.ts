import { Routes } from '@angular/router';
import { TravelsComponent } from './travels/travels.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: TravelsComponent,
    pathMatch: 'full'
  },
  {
    path: 'reports',
    loadChildren: () => import('mfe1/Module').then(m => m.ReportModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
