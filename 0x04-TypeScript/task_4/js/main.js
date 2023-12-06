"use strict";
exports.__esModule = true;
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("./subjects/React");
// Create constants for subjects
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
// Create a Teacher object
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// For Cpp subject
console.log('C++:');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// For Java subject
console.log('\nJava:');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// For React subject
console.log('\nReact:');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
