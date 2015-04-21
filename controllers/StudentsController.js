studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;


  $scope.addStudent = function() {
    var name = $scope.studentName;
    $scope.StudentsFactory.addStudent(name);
    $scope.studentName = null;
  };

  $scope.deleteStudent = function(student) {
    $scope.StudentsFactory.deleteStudent(student);
  };

  $scope.addPermission = function(student) {
    $scope.StudentsFactory.addPermission(student);
  };

  $scope.getPermission = function(student) {
    return $scope.StudentsFactory.getPermission(student);
  };

  $scope.changePermission = function(student) {
    return $scope.StudentsFactory.changePermission(student);
  }
});
