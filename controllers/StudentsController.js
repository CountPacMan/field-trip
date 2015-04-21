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
  };

  $scope.sortColumn = function(clickedColumn) {
    if (!$scope.column || ($scope.column[0] === '-' && $scope.column.substr(1) === clickedColumn) || $scope.column != clickedColumn) {
      $scope.column = clickedColumn;
    } else {
      $scope.column = '-' + clickedColumn;
    }
  };

  $scope.startsWith = function (query, expected) {
    var lowerStr = (query + "").toLowerCase();
    return lowerStr.indexOf(expected.toLowerCase()) === 0;
  };
});
