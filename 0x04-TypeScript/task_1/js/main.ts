export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]: any;
  }
export interface Directors extends Teacher {
  numberOfReports: number;
  }

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  }

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
  }

export interface IStudent {
  firstName: string;
  lastName: string;
}

export interface IStudentClass extends IStudent {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
  }

const student = new StudentClass("Mercy", "NJ");

console.log(student.displayName());
console.log(student.workOnHomework());
