(function() {
    'use strict';

    angular
        .module('pictureeater')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http'];

    /* @ngInject */
    function mainFactory($http) {
        var service = {
            transformationExamples: transformationExamples
        };

        return service;

        var transformationExamples;
    }
})();
