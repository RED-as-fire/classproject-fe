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
  id:number;

  constructor(public ref: NbDialogRef<AddModalComponent>) { }

  ngOnInit(): void {
  }
  cancel() {
    this.ref.close();

  }

  submit(){
    type upsertStudent = Omit<Student,| "courses">;
    const student:upsertStudent={
      name:this.name,
      surname:this.surname,
      id:this.id
    };
    this.ref.close(student);
  }
}
