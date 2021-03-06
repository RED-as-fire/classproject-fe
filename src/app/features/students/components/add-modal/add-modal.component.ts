import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Student } from 'src/app/core/model/student.interface';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  name:string='';
  surname:string='';

  constructor(protected ref: NbDialogRef<AddModalComponent>) { }

  ngOnInit(): void {
  }
  cancel() {
    this.ref.close();
  }

  submit(){
    type newStudent = Omit<Student, "id"| "courses">;
    const student:newStudent={
      name:this.name,
      surname:this.surname
    };
    this.ref.close(student);
  }
}
