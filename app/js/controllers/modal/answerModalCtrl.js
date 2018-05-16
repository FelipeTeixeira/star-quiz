(function () {
    'use strict';
    angular
        .module('starQuiz-app')
        .controller('AnswerModalCtrl', AnswerModalCtrl);

    function AnswerModalCtrl(close, character, answerArray, nameCharacters) {
        let vm = this;
        vm.isOpen = true;

        vm.closeModal = function () {
            close();
        };

        // ANGULAR TYPEAHEAD
        vm.nameCharacters = nameCharacters;

        vm.answer = function () {
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
    };

    AnswerModalCtrl.$inject = ['close', 'character', 'answerArray', 'nameCharacters'];
})();
