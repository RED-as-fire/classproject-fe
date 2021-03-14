import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Course } from 'src/app/core/model/course.interface';
import { columns } from 'src/app/core/model/tablecolumns.interface';
import { CoursesFacadeService } from '../../services/courses-facade.service';
import { UpsertCourseModalComponent } from '../upsert-course-modal/upsert-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  cols:columns[];
  courses:Course[];

  constructor(private service:CoursesFacadeService,private dialogService: NbDialogService) { }

  get allCourses(){
    return this.service.retrieveAllCourses();
  }

  ngOnInit(): void {
    this.cols=[
      {
        label:"Codice",
        value:"code",
        direction:"left"
      },
      {
        label:"Nome",
        value:"name",
        direction:"left"
      },
      {
        label: "Azioni",
        value: "actions",
        direction: "center"
      },
    ];

    this.allCourses.subscribe((courses:Course[])=>{
      this.courses=courses;
    })
  }

  deleteCourse(courseId:number){
    console.log(`pronto a cancellare corso con id=${courseId}`);
    this.service.deleteCourse(courseId).subscribe();
    this.courses=this.courses.filter(c=>c.id !==courseId);
  }

  upsertCourse(type:string,$event:any){
    console.log({type});
    console.log({$event});
    if(type==="add"){
      this.dialogService.open(UpsertCourseModalComponent)
      .onClose.subscribe((newCourse:Course)=>{
        if(newCourse !=undefined){
          this.service.addCourse(newCourse).subscribe((savedCourse:Course)=>{
            console.log({savedCourse});
            this.courses.splice(this.courses.length,0,savedCourse);
          })
        } else{
          console.log("annullato");
        }
      })
    } else if(type==="edit"){
      const course={
        code:$event.code,
        name:$event.name,
        id:$event.id
      };

      this.dialogService.open(UpsertCourseModalComponent,{context:{...course}})
      .onClose.subscribe((editCourse:Course)=>{
        console.log({editCourse});
        if(editCourse !=undefined){
          this.service.editCourse(editCourse).subscribe((editedStudent:any)=>{
            console.log({editedStudent});
            const idx = this.courses.findIndex(
              el => el.id === editedStudent.id
            );
            this.courses.splice(idx, 1, editedStudent);
          })
        } else{
          console.log("annullato")
        }
      })
    }
  }

}

