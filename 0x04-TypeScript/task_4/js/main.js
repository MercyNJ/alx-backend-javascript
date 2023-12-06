"use strict";
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />
exports.__esModule = true;
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("./subjects/React");
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
exports.cTeacher = {
    firstName: 'Mercy',
    lastName: 'Njuguna',
    experienceTeachingC: 10
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
