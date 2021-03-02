import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './components/main/students.component';
import { StudentsFacadeService } from './components/services/students-facade.service';
import { StudentsRoutingModule } from './students-routing.module';




@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  providers:[StudentsFacadeService]
})
export class StudentsModule { }
