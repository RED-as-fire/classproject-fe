import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpCommunicationsService } from './http-communications/http-communications.service';



@NgModule({
  declarations: [],
  providers:[HttpCommunicationsService],
  imports: [HttpClientModule]
})
export class CoreModule { }
