import {
  Component,
  OnInit,
  TemplateRef
} from "@angular/core";
import {
  NbDialogService
} from "@nebular/theme";
import {
  Observable
} from "rxjs";
import {
  Student
} from "src/app/core/model/student.interface";
import { columns } from "src/app/core/model/tablecolumns.interface";
import { AddModalComponent } from "../add-modal/add-modal.component";
import {
  StudentsFacadeService
} from "../services/students-facade.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  addModalInstance:AddModalComponent
  cols: columns[];
  onlyCourseLess: boolean = false;
  students: Student[];
  initialstudents: Student[];
  constructor(private service: StudentsFacadeService, private dialogService: NbDialogService) {}

  get allStudents(): Observable < Student[] > {
    return this.service.retrieveStudents();
  }
  ngOnInit(): void {
    this.cols = [{
        label: "Nome",
        value: "name",
        direction: "left"
      },
      {
        label: "Cognome",
        value: "surname",
        direction: "left"
      },
      {
        label: "corsi",
        value: "courses",
        direction: "left"
      },
      {
        label: "Azioni",
        value: "actions",
        direction: "center"
      },
    ];
    this.allStudents.subscribe(students => {
      this.students = students;
      this.initialstudents = students;
      console.log({
        students
      });

    })

  }

  joinCourses(courses: any): string {
    return courses.map(({
      name
    }) => name).join(",") || "nessun corso".toUpperCase();
  }
  filterStudents() {
    if (this.onlyCourseLess) {
      this.students = this.students.filter(student => student.courses.length == 0)
    } else {
      this.students = this.initialstudents;
    }
  }

  deleteStudent(studentId: number) {
    console.log("pronto ad eliminare studente");
    this.service.deleteStudent(studentId).subscribe();
    this.initialstudents=this.initialstudents.filter(s=>s.id !==studentId);
    this.students=this.initialstudents;
    this.onlyCourseLess=false;

  }
  editStudent(student: Student) {
    console.log("pronto a modificare studente");
    console.log({
      student
    });
  }
  open(dialog: TemplateRef < any > , student: Student) {
    this.dialogService.open(dialog, {
      context: `sei sicuro di voler eliminare ${student.name} ${student.surname}?`
    }).onClose.subscribe(event => {
      if(event=="delete"){
        this.service.deleteStudent(student.id).subscribe();
        this.initialstudents=this.initialstudents.filter(s=>s.id !==student.id);
        this.students=this.initialstudents;
        this.onlyCourseLess=false;
      }
    });
  }

  upsertStudent(type:string,$event:any){
      console.log({$event})
      console.log({type})
    if(type==="add"){
      this.dialogService.open(AddModalComponent)
      .onClose.subscribe((newStudent:Student)=>{
        if(newStudent !=undefined){
          this.service.addStudent(newStudent).subscribe((savedStudent:Student)=>{
            console.log({savedStudent});
            this.initialstudents.splice(this.initialstudents.length,0,savedStudent[0]);
            this.students=[...this.initialstudents];
            this.onlyCourseLess=false;
          })
        } else{
          console.log("annullato")
        }
      })
    } else if(type==="edit"){
      const student:any={
        name:$event.name,
        surname:$event.surname,
        id:$event.id
      }
      this.dialogService.open(AddModalComponent,{context:{...student}})
      .onClose.subscribe((editStudent:Student)=>{
        if(editStudent !=undefined){
          this.service.editStudent(editStudent).subscribe((editedStudent:Student)=>{
            console.log({editedStudent});
            const idx = this.initialstudents.findIndex(
              el => el.id === editedStudent.id
            );
            this.initialstudents.splice(idx, 1, editedStudent[0]);
            this.students=[...this.initialstudents];
            this.onlyCourseLess=false;
          })
        } else{
          console.log("annullato")
        }
      })
    }
  }


}
