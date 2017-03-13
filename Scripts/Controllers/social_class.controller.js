/*jshint multistr: true */
/* jshint node: true */
"use strict";

// scope syntax, not controller-as
angular.module('restApp').controller('SocialClassController', function($scope, $window, socialClassService, $q, $http) {
    var getAllEntities = function() {        
        var promise = socialClassService.getEntities();
        promise.then(function(response) {
            if (response.status === 200) {
                $scope.entities = [];
                for (var i = response.data.length - 1; i >= 0; i--) {
                	var obj = response.data[i];
                    if (angular.isUndefined(obj.id)) {
                        obj.id = 0;
                    }
                    if (angular.isUndefined(obj.points_adjustment)) {
                        obj.points_adjustment = 0;
                    }
                    $scope.entities.push(obj);
                    obj = null;
                }
            }
        });
    };
    getAllEntities();
});