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

        peopleService.loadFilms(character.character).then(function (films) {
            vm.charactersFilms = films;
        });

        peopleService.loadSpecies(character.character).then(function (species) {
            vm.charactersSpecies = species;
        });

        peopleService.loadVehicles(character.character).then(function (vehicles) {
            vm.charactersVehicles = vehicles;
        });

        peopleService.loadPlanets(character.character).then(function (planets) {
            vm.charactersPlanets = planets;
        });

        vm.character = character.character;

    };

    DetailsModalCtrl.$inject = ['close', 'peopleService', 'character'];
})();
