import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './material.module';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
