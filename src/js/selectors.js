// SELECTORS

// BUTTONS

let btnPlayerOne = document.querySelector("#btnPlayerOne");
let btnPlayerTwo = document.querySelector("#btnPlayerTwo");
let btnReset = document.querySelector("#btnReset");

// INPUTS

let inputScoreCounter = document.querySelector("#inputScoreCounter");

// SPANS

let scorePlayerOne = document.querySelector("#scorePlayerOne");
let scorePlayerTwo = document.querySelector("#scorePlayerTwo");

// COUNTERS

let counterPlayerOne = 0;
let counterPlayerTwo = 0;

// COUNTERS FUNCTIONS 

let updateCounterPlayerOne = () => {
    counterPlayerOne++;
    return counterPlayerOne;
};

let updateCounterPlayerTwo = () => {
    counterPlayerTwo++;
    return counterPlayerTwo;
};

export {btnPlayerOne, btnPlayerTwo, btnReset, inputScoreCounter, scorePlayerOne, scorePlayerTwo, counterPlayerOne, counterPlayerTwo, updateCounterPlayerOne, updateCounterPlayerTwo};