import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { newStudent, Student } from 'src/app/core/model/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsFacadeService {

  constructor(private http:HttpCommunicationsService) { }

  retrieveStudents():Observable<Student[]>{
    return this.http.retrieveGetCall("student");
  }

  deleteStudent(id:number){
    return this.http.retrieveDeleteCall(`student/${id}`);
  }

  addStudent(student:newStudent){
    return this.http.retrievePostCall("student",{
      ...student
    })
  }
}
