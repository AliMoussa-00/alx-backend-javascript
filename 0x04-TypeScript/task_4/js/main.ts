/**
 * XXXXXX
 * Do NOT use 'namespace' since we can't transcript that to 'javascript'
 * we should use 'module' instead
 */
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	experienceTeachingC: 10,
};

cpp.teacher = cTeacher;

console.log('C++');
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);
console.log()

java.teacher = cTeacher;

console.log('Java');
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);
console.log()

react.teacher = cTeacher;

console.log('React');
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);
console.log()

