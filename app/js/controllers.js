'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('PersonListCtrl', ['$scope', 'Person',
  function($scope, Person) {
    $scope.persons = Person.query();

    $scope.pagingOptions = {
          pageSizes: [10, 20, 30],
          pageSize: 10,
          currentPage: 1
    };	


    //$scope.orderProp = 'name';
    $scope.gridOptions = { 
      data: 'persons', 
      enablePaging: true,
		  showFooter: true,
      totalServerItems: 118,
      pagingOptions: $scope.pagingOptions,
      columnDefs: [{field:'name', displayName:'Name'}, {field:'age', displayName:'Age'}]
    };

  }]);
  
  
