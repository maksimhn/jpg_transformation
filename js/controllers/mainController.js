(function() {
    'use strict';

    angular
        .module('pictureeater')
        .controller('mainController', mainController);

    mainController.$inject = ['mainFactory'];

    /* @ngInject */
    function mainController(mainFactory) {
        var vm = this;

        activate();

        function activate() {
            var transformationExamples = mainFactory.transformationExamples;
            var tempUploadResult;
            
        }
    }
})();
