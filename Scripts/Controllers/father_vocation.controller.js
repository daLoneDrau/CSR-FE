/*jshint multistr: true */
/* jshint node: true */
"use strict";

// scope syntax, not controller-as
angular.module('restApp').controller('FatherVocationController', function($scope, $window, socialClassService, fatherVocationService, $q, $http) {
	$scope.update = function() {
		if ($scope.social_class_select === null) {
		} else {
			$scope.selected_entities = [];
            for (var j = $scope.entities.length - 1; j >= 0; j--) {
            	if ($scope.entities[j].social_class.id === $scope.social_class_select.id) {
            		$scope.selected_entities.push($scope.entities[j]);
            	}
            }
		}
	}
	var getAllEntities = function() {        
        var promise = fatherVocationService.getEntities();
        promise.then(function(response) {
            if (response.status === 200) {
            	$scope.social_classes = [];
                $scope.entities = [];
                for (var i = response.data.length - 1; i >= 0; i--) {
                	var obj = response.data[i];
                    if (angular.isUndefined(obj.id)) {
                        obj.id = 0;
                    }
                    if (angular.isUndefined(obj.is_liveried)) {
                        obj.is_liveried = false;
                    }
                    if (angular.isUndefined(obj.social_class.id)) {
                        obj.social_class.id = 0;
                    }
                    if (angular.isUndefined(obj.social_status)) {
                        obj.social_status = 0;
                    }
                    if (angular.isUndefined(obj.thieves_guild_status)) {
                        obj.thieves_guild_status = 0;
                    }
                    if (angular.isUndefined(obj.num_starting_thievery_skills)) {
                        obj.num_starting_thievery_skills = 0;
                    }
                    var found = false;
                    for (var j = $scope.social_classes.length - 1; j >= 0; j--) {
                    	if ($scope.social_classes[j].id === obj.social_class.id) {
                    		found = true;
                    		break;
                    	}
                    }
                    if (!found) {
                    	$scope.social_classes.push(obj.social_class);
                    }
                    $scope.entities.push(obj);
                    obj = null;
                }
                console.log($scope.social_classes);
            }
        });
    };
    getAllEntities();
});