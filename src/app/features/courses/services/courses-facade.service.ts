import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { Course, newCourse } from 'src/app/core/model/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesFacadeService {

  constructor(private http:HttpCommunicationsService) { }

  retrieveAllCourses(){
    return this.http.retrieveGetCall("course");
  }

  addCourse(course:newCourse){
    return this.http.retrievePostCall("course",{
      ...course
    })
  }

  editCourse(editCourse: Course) {
    return this.http.retrievePutCall(`course/${editCourse.id}`,{
      ...editCourse
    })
  }

  deleteCourse(id:number){
    return this.http.retrieveDeleteCall(`course/${id}`);
  }
}
