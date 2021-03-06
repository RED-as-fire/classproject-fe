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
import {
  StudentsFacadeService
} from "../services/students-facade.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  cols: any[];
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
      })
      this.cols.forEach(header => {
        this.students.forEach(s => {
          console.log(s[header.value])
        })
      })

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

  deleteStudent(ref: any) {
    console.log("pronto ad eliminare studente");
    console.log({
      ref
    });

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
        console.log("tolgo", student.name)
      }
    });
  }
}
