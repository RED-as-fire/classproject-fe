import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbDialogModule, NbToggleModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { StudentsComponent } from './components/main/students.component';
import { StudentsFacadeService } from './components/services/students-facade.service';
import { StudentsRoutingModule } from './students-routing.module';




@NgModule({
  declarations: [StudentsComponent, AddModalComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    NbToggleModule,
    NbDialogModule.forChild()
  ],
  providers:[StudentsFacadeService]
})
export class StudentsModule { }
