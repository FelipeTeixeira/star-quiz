(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('AnswerModalCtrl', AnswerModalCtrl);

    function AnswerModalCtrl(close, character, answerArray, nameCharacters) {
        let vm = this;
        vm.isOpen = true;

        // ANGULAR TYPEAHEAD
        vm.nameCharacters = nameCharacters;

        vm.closeModal = function () {
            close();
        };

        vm.submit = function () {
            if (vm.form.$valid) {
                let answerInput = vm.inputName.toLowerCase(),
                    originalName = character.quiz.name.toLowerCase(),
                    scoreAnswer = 10;

                if (answerInput !== originalName) {
                    scoreAnswer = 0;
                } else if (answerInput === originalName && character.usedHelp) {
                    scoreAnswer = 5;
                }

                if (scoreAnswer === 10 || scoreAnswer === 5) {
                    let answer = {
                        score: scoreAnswer,
                        originalName: originalName
                    }

                    answerArray.push(answer);
                    close();
                }
            }
        }
    };

    AnswerModalCtrl.$inject = ['close', 'character', 'answerArray', 'nameCharacters'];
})();
