interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[attribute: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

/**
 * We define an interface named PrintTeacherFunction with a function signature
 * that accepts two parameters of type string (firstName and lastName) and returns a string.
 */
interface PrintTeacher {
	(firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;
};

/**
 * Defining the class through a constructor by
 * describes the public properties and methods of the class
 */
interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

/**
 * Defining the constructor through an interface
 */
interface StudentClassConstructorInterface {
	new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
	private _firstName: string;
	private _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this._firstName;
	}
}


// /////////////////////////////testing /////////////////////////////////

// ## task_0
const teacherA: Teacher = {
	firstName: 'Ali',
	lastName: 'Moussa',
	fullTimeEmployee: true,
	yearsOfExperience: 5,
	location: 'tanger',
};

const teacherB: Teacher = {
	firstName: 'Ali',
	lastName: 'Moussa',
	fullTimeEmployee: true,
	// removing optional attr
	location: 'tanger',
	// adding custom attr
	isGoodAtJob: true,
};

// console.log(teacherA);
// console.log(teacherB);

// ## task_1
const director: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
// console.log(director);

// ## task_3
// console.log(printTeacher('John', 'Doe'));

// ## task_4
function createStudent(
	constructor: StudentClassConstructorInterface,
	firstName: string,
	lastName: string
): StudentClassInterface {
	return new constructor(firstName, lastName);
}

const student = createStudent(StudentClass, 'Ali', 'Moussa');
console.log(student.displayName());
console.log(student.workOnHomework());
