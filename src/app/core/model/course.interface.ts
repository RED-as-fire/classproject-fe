import { Student } from "./student.interface";

export interface Course {
  id:number;
  code:string;
  name:string;
  students:Student[];
}
export type newCourse = Omit<Course,"id"|"students">
