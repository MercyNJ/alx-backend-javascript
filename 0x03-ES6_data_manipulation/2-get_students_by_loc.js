import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(studentList = getListStudents(), city) {
  return studentList.filter((student) => student.location === city);
}
