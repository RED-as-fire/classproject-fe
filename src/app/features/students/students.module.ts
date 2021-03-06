import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbDialogModule, NbToggleModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsComponent } from './components/main/students.component';
import { StudentsFacadeService } from './components/services/students-facade.service';
import { StudentsRoutingModule } from './students-routing.module';




@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    NbToggleModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forChild()
  ],
  providers:[StudentsFacadeService]
})
export class StudentsModule { }
