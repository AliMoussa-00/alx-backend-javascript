/**
 * a function that returns an array of students
 * for a specific city with their new grade
 * @param {array} listStudents - array of object students
 * @param {string} city - sum of all ids
 * @param {array} newGrades - Array of “grade” objects
 * @return {array} - array of students objects
 */
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObject !== undefined ? gradeObject.grade : 'N/A';

      return { ...student, grade };
    });

  return students;
}
