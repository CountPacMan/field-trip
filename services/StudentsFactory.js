studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(name) {
    var student = { name: name, permissionSlip: "no" };
    factory.students.push(student);
  };

  factory.deleteStudent = function(student) {
    var index = factory.getIndex(student);
    factory.students.splice(index, 1);
  };

  factory.addPermission = function(student) {
    var index = factory.getIndex(student);
    factory.students[index].permissionSlip = "yes";
  };

  factory.getIndex = function(student) {
    return factory.students.indexOf(student);
  };

  factory.getPermission = function(student) {
    var index = factory.getIndex(student);
    return factory.students[index].permissionSlip;
  };

  factory.changePermission = function(student) {
    var index = factory.getIndex(student);
    factory.students[index].permissionSlip = factory.students[index].permissionSlip === "yes" ? "no" : "yes";
  }

  return factory;
});
