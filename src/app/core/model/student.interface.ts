import { Course } from './course.interface';
export interface Student {
  id:number;
  name:string;
  surname:string;
  courses:Course[]
}
