<!-- index.html -->
<!DOCTYPE html>
<html lang="en" ng-app="fullNameApp">

<head>
  <meta charset="UTF-8">
  <title>Angular Full Name Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body>
  <div ng-controller="FullNameController">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" ng-model="firstName" placeholder="Enter your first name">

    <br>

    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" ng-model="lastName" placeholder="Enter your last name">

    <br>

    <button ng-click="displayFullName()">Display Full Name</button>

    <br>

    <p ng-show="fullName">Full Name: {{ fullName }}</p>
  </div>

  <script >
    // app.js
angular.module('fullNameApp', [])
  .controller('FullNameController', function ($scope) {
    // Default values
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.fullName = '';

    // Function to display the full name
    $scope.displayFullName = function () {
      $scope.fullName = $scope.firstName + ' ' + $scope.lastName;
    };
  });

  </script>
</body>

</html>
