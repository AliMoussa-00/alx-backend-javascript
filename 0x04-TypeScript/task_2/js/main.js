var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
/**
 *
 * the as keyword is used for type assertions and type casting.
 * It tells the TypeScript compiler to treat a value as a specific type,
 * overriding its inferred or declared type
 */
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
function teachClass(todayClass) {
    return "Teaching ".concat(todayClass);
}
/////// testing ///////////////
var employeeA = createEmployee(200);
var employeeB = createEmployee(700);
console.log(employeeA);
console.log(employeeB);
console.log(isDirector(employeeA));
console.log(isDirector(employeeB));
console.log(executeWork(employeeA));
console.log(executeWork(employeeB));
console.log(teachClass('Math'));
console.log(teachClass('History'));
