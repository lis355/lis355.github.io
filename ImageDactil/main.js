"use strict";

function DactylologyTrainer() {
    var words = wordsDictionary;
    var wordsUsed = [];
    var letterInterval = 1000;
    var wordMaxLength = -1;
    var currentWord = "";
    var currentPos = 0;
    var animationLoopId = 0;
    var imageElement = document.getElementById("alphabetScreen");
    var inputFieldElement = document.getElementById("inputField");
    var resultTextElement = document.getElementById("correctWord");

    for (var i = 0; i < wordsDictionary.length; i++)
        wordsUsed.push([]);

    this.setLetterInterval = function (milliseconds) {
        letterInterval = milliseconds;
    };

    this.setLengthLimit = function (wordLength) {
        wordMaxLength = wordLength;
    };

    this.newWord = function () {
        var currentWordLength = (wordMaxLength > 0) ? wordMaxLength : Math.max(3, Math.floor(Math.random() * words.length));
        if (words[currentWordLength].length == 0) {
            words[currentWordLength] = wordsUsed[currentWordLength].slice(0);
            wordsUsed[currentWordLength] = [];
        }

        var index = Math.floor(Math.random() * words[currentWordLength].length);
        currentWord = words[currentWordLength][index];
        words[currentWordLength].splice(index, 1);
        wordsUsed[currentWordLength].push(currentWord);

        this.restart();
    };

    this.restart = function () {
        stopAnimation();
        currentPos = 0;

        resultTextElement.innerHTML = "";

        startAnimation();
    };

    this.check = function () {
        resultTextElement.innerHTML = (inputFieldElement.value.toLowerCase() == currentWord) ? "Правильно!" : "Не правильно (((";
    };

    function startAnimation() {
        animationLoopId = setInterval(function () {
            stepAnimation();
        }, letterInterval);

        stepAnimation();
    }

    function stepAnimation() {
        if (currentPos >= currentWord.length) {
            stopAnimation();
        } else {
            imageElement.src = alphabetImageNames[currentWord[currentPos]];
            currentPos++;
        }
    }

    function stopAnimation() {
        clearInterval(animationLoopId);
        imageElement.src = alphabetImageNames["empty"];
    }
}

var trainer = null;

function init() {
    trainer = new DactylologyTrainer();
}
