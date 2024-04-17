interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

function isDirector(employee: Director | Teacher) {
	return employee instanceof Director;
}
/**
 *
 * the as keyword is used for type assertions and type casting.
 * It tells the TypeScript compiler to treat a value as a specific type,
 * overriding its inferred or declared type
 */
function executeWork(employee: Director | Teacher) {
	if (isDirector(employee)) {
		return (employee as Director).workDirectorTasks();
	}
	return (employee as Teacher).workTeacherTasks();
}

/**
 * task_7
 */
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
	return `Teaching ${todayClass}`;
}

/////// testing ///////////////
const employeeA = createEmployee(200);
const employeeB = createEmployee(700);

console.log(employeeA);
console.log(employeeB);

console.log(isDirector(employeeA));
console.log(isDirector(employeeB));

console.log(executeWork(employeeA));
console.log(executeWork(employeeB));

console.log(teachClass('Math'));
console.log(teachClass('History'));
