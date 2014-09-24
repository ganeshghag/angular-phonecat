'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.factory('Person', ['$resource',
  function($resource){
    return $resource('phones/persons.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
