(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('DetailsModalCtrl', DetailsModalCtrl);

    function DetailsModalCtrl(close, peopleService, character) {
        let vm = this;

        vm.closeModal = function () {
            close();
        };

        peopleService.loadFilms(character.quiz).then(function (films) {
            vm.charactersFilms = films;
        });

        peopleService.loadSpecies(character.quiz).then(function (species) {
            vm.charactersSpecies = species;
        });

        peopleService.loadVehicles(character.quiz).then(function (vehicles) {
            vm.charactersVehicles = vehicles;
        });

        peopleService.loadPlanets(character.quiz).then(function (planets) {
            vm.charactersPlanets = planets;
        });

        vm.character = character.quiz;

    };

    DetailsModalCtrl.$inject = ['close', 'peopleService', 'character'];
})();
