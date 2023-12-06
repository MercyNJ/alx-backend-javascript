"use strict";
exports.__esModule = true;
exports.printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var student = new StudentClass("Mercy", "NJ");
console.log(student.displayName());
console.log(student.workOnHomework());
