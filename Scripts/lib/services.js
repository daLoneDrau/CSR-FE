/* jshint multistr: true */
/* jshint node: true */
"use strict";

// production
//var httpBasicBase = "http://service-osrapi.rhcloud.com/OSRAPI/basic_dnd/";

// local
var httpBasicBase = "http://localhost:8080/CSRService/csr/";

angular.module('restApp').factory('aspectsService', function($http, $q) {
    var urlBase = [ httpBasicBase, 'birth_aspects' ].join("");
    var dataFactory = {};

    dataFactory.getEntities = function () {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase));
        return defer.promise;
    };
    dataFactory.getEntity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
    dataFactory.getEntityByCode = function (name) {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase + "/code/" + name));
        return defer.promise;
    };
    dataFactory.insertEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.post(urlBase, entity));
        return defer.promise;
    };
    dataFactory.updateEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.put(urlBase, entity));
        return defer.promise;
    };
    dataFactory.deleteEntity = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    return dataFactory;
});

angular.module('restApp').factory('socialClassService', function($http, $q) {
    var urlBase = [ httpBasicBase, 'social_classes' ].join("");
    var dataFactory = {};

    dataFactory.getEntities = function () {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase));
        return defer.promise;
    };
    dataFactory.getEntity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
    dataFactory.getEntityByName = function (name) {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase + "/name/" + name));
        return defer.promise;
    };
    dataFactory.insertEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.post(urlBase, entity));
        return defer.promise;
    };
    dataFactory.updateEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.put(urlBase, entity));
        return defer.promise;
    };
    dataFactory.deleteEntity = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    return dataFactory;
});

angular.module('restApp').factory('fatherVocationService', function($http, $q) {
    var urlBase = [ httpBasicBase, 'father_vocations' ].join("");
    var dataFactory = {};

    dataFactory.getEntities = function () {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase));
        return defer.promise;
    };
    dataFactory.getEntity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
    dataFactory.getEntityByName = function (name) {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase + "/name/" + name));
        return defer.promise;
    };
    dataFactory.insertEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.post(urlBase, entity));
        return defer.promise;
    };
    dataFactory.updateEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.put(urlBase, entity));
        return defer.promise;
    };
    dataFactory.deleteEntity = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    return dataFactory;
});

angular.module('restApp').factory('siblingRankService', function($http, $q) {
    var urlBase = [ httpBasicBase, 'sibling_ranks' ].join("");
    var dataFactory = {};

    dataFactory.getEntities = function () {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase));
        return defer.promise;
    };
    dataFactory.getEntity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
    dataFactory.getEntityByCode = function (name) {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase + "/code/" + name));
        return defer.promise;
    };
    dataFactory.insertEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.post(urlBase, entity));
        return defer.promise;
    };
    dataFactory.updateEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.put(urlBase, entity));
        return defer.promise;
    };
    dataFactory.deleteEntity = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    return dataFactory;
});

angular.module('restApp').factory('familyStatusService', function($http, $q) {
    var urlBase = [ httpBasicBase, 'family_statuss' ].join("");
    var dataFactory = {};

    dataFactory.getEntities = function () {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase));
        return defer.promise;
    };
    dataFactory.getEntity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
    dataFactory.getEntityByCode = function (name) {
        var defer = $q.defer();
        defer.resolve($http.get(urlBase + "/code/" + name));
        return defer.promise;
    };
    dataFactory.insertEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.post(urlBase, entity));
        return defer.promise;
    };
    dataFactory.updateEntity = function (entity) {
        var defer = $q.defer();
        defer.resolve($http.put(urlBase, entity));
        return defer.promise;
    };
    dataFactory.deleteEntity = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
    return dataFactory;
});
