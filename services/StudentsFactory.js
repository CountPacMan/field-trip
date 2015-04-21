studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(name) {
    var student = { name: name, permissionSlip: false };
    factory.students.push(student);
  };

  factory.deleteStudent = function(student) {
    var index = factory.getIndex(student);
    factory.students.splice(index, 1);
  };

  factory.addPermission = function(student) {
    var index = factory.getIndex(student);
    factory.students[index].permissionSlip = true;
  };

  factory.getIndex = function(student) {
    return factory.students.indexOf(student);
  };

  factory.getPermission = function(student) {
    var index = factory.getIndex(student);
    return factory.students[index].permissionSlip === true ? "yes" : "no";
  };
  return factory;
});
