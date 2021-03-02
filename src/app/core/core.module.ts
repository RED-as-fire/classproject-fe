import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpCommunicationsService } from './http-communications/http-communications.service';



@NgModule({
  declarations: [],
  providers:[HttpCommunicationsService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
