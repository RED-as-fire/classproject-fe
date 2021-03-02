import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { Student } from 'src/app/core/model/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsFacadeService {

  constructor(private http:HttpCommunicationsService) { }

  retrieveStudents():Observable<Student[]>{
    return this.http.retrieveGetCall("student");
  }
}
