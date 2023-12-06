/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
            var _this = this;
            this.setTeacher = function (teacher) {
                _this.teacher = teacher;
            };
        }
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
