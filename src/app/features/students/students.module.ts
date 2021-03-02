import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './components/main/students.component';
import { StudentsRoutingModule } from './students-routing.module';




@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
