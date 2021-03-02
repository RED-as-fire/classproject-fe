import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    ButtonModule
  ]
})
export class PrimeNgModule { }
