import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(studentList = getListStudents()) {
  return studentList.reduce((accumulator, student) => accumulator + student.id, 0);
}
