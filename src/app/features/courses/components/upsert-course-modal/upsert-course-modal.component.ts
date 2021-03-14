import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Course } from 'src/app/core/model/course.interface';

@Component({
  selector: 'app-upsert-course-modal',
  templateUrl: './upsert-course-modal.component.html',
  styleUrls: ['./upsert-course-modal.component.scss']
})
export class UpsertCourseModalComponent implements OnInit {

  code:string='';
  name:string='';
  id:number;
  constructor(public ref: NbDialogRef<UpsertCourseModalComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.ref.close();
  }

  submit(){
    type upsertCourse = Omit<Course,| "students">;
    const student={
      name:this.name,
      code:this.code,
      id:this.id,
      studentIDs:[]
    };
    this.ref.close(student);
  }
}
