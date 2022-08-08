import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';
import { SharedComponent } from './shared.component';
import { SharedService } from './shared.service';

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
