import { Component, OnInit } from '@angular/core';
import { StudentsFacadeService } from '../services/students-facade.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private service: StudentsFacadeService) { }

  ngOnInit(): void {
    this.service.retrieveStudents().subscribe(students=>{
      console.log({students})
    })
  }

}
