var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
// /////////////////////////////testing /////////////////////////////////
// ## task_0
var teacherA = {
    firstName: 'Ali',
    lastName: 'Moussa',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'tanger',
};
var teacherB = {
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
var director = {
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
function createStudent(constructor, firstName, lastName) {
    return new constructor(firstName, lastName);
}
var student = createStudent(StudentClass, 'Ali', 'Moussa');
console.log(student.displayName());
console.log(student.workOnHomework());
