(function () {
    'use strict';

    angular.module('starQuiz-app')
        .service('peopleService', function ($q, $http) {

            // GENERATE PROMISSE
            var _extractEndPoints = function (list) {
                let array = [];
                list.forEach(element => {
                    array.push($http({ method: 'GET', url: element }));
                });
                return array;
            };

            var _joinResults = function (resultsArray, property) {
                var results = resultsArray.map(function (element) {
                    return element.data[property];
                }).join(', ');
                return results;
            }

            var loadFilms = function (people) {
                return $q.all(_extractEndPoints(people.films))
                    .then(function (results) {
                        return _joinResults(results, "title");
                    })
                    .catch(function (err) {
                        return $q.reject(err);
                    });
            }

            var loadSpecies = function (people) {
                return $q.all(_extractEndPoints(people.species))
                    .then(function (results) {
                        return _joinResults(results, "name");
                    })
                    .catch(function (err) {
                        return $q.reject(err);
                    });
            }

            var loadVehicles = function (people) {
                return $q.all(_extractEndPoints(people.vehicles))
                    .then(function (results) {
                        return _joinResults(results, "name");
                    })
                    .catch(function (err) {
                        return $q.reject(err);
                    });
            }

            var loadPlanets = function (people) {
                return $http.get(people.homeworld)
                    .then(function (response) {
                        return response.data.name;
                    })
                    .catch(function (err) {
                        return $q.reject(err);
                    });
            }

            return {
                loadFilms: loadFilms,
                loadSpecies: loadSpecies,
                loadVehicles: loadVehicles,
                loadPlanets: loadPlanets
            };
        })
})();

