studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.students = StudentsFactory.students;
  
  $scope.addPermission = function(student) {
    $scope.StudentsFactory.addPermission(student);
  };
});
