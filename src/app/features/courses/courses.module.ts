import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbDialogModule, NbToggleModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './components/main/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesFacadeService } from './services/courses-facade.service';
import { UpsertCourseModalComponent } from './components/upsert-course-modal/upsert-course-modal.component';




@NgModule({
  declarations: [CoursesComponent, UpsertCourseModalComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    NbToggleModule,
    NbDialogModule.forChild()
  ],
  providers:[CoursesFacadeService]
})
export class CoursesModule { }
