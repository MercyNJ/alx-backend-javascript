import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(studentList = getListStudents(), city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((originalStudent) => {
      const student = { ...originalStudent };
      newGrades.forEach((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }
      });

      if (!Object.prototype.hasOwnProperty.call(student, 'grade')) {
        student.grade = 'N/A';
      }

      return student;
    });
}
