/*jshint multistr: true */
/* jshint node: true */
"use strict";

// scope syntax, not controller-as
angular.module('restApp').controller('IoPcDataController', function($scope, $window, ioPcDataService, $q, $http) {
	$scope.Math = window.Math;
    $scope.getRandomEntity = function() {        
        var promise = ioPcDataService.getRandomEntity();
        promise.then(function(response) {
            if (response.status === 200) {
                $scope.entities = [];
                for (var i = response.data.length - 1; i >= 0; i--) {
                	var obj = response.data[i];
                    if (angular.isUndefined(obj.id)) {
                        obj.id = 0;
                    }
                    if (angular.isUndefined(obj.build)) {
                        obj.build = 0;
                    }
                    switch (obj.build) {
                    case 0:
                    case 1:
                    	obj.build_string = "Very Light";
                    	break;
                    case 2:
                    case 3:
                    	obj.build_string = "Light";
                    	break;
                    case 4:
                    case 5:
                    case 6:
                    	obj.build_string = "Average";
                    	break;
                    case 7:
                    case 8:
                    case 9:
                    	obj.build_string = "Heavy";
                    	break;
                    	default:
                        	obj.build_string = "Massive";                    		
                    }
                    if (obj.family_status.title.indexOf("<gen_off>") >= 0) {
                    	var s = [obj.gender.gender_offspring.charAt(0).toUpperCase(),
                    		obj.gender.gender_offspring.substring(1)].join("");
                    	obj.family_status.title = obj.family_status.title.replace(/<gen_off>/, s);
                    	s = null;
                    }
                    console.log(obj);
                    $scope.entitySelect = obj;
                    obj = null;
                }
            }
        });
    };
});