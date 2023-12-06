/// <reference path="Teacher.ts" />

namespace Subjects {
  import Teacher = Subjects.Teacher;

  export class Subject{
    teacher: Teacher;

    setTeacher = (teacher: Teacher) => {
      this.teacher = teacher;
    }
    
    }
   }
