import * as Selector from "./selectors.js";

// FUNCTIONS

let calculateScorePlayerOne = () => {
    Selector.inputScoreCounter.disabled = true;
    let counterOneValue = Selector.updateCounterPlayerOne();
    Selector.scorePlayerOne.innerText = `${counterOneValue}`;
    if (counterOneValue == Selector.inputScoreCounter.value) {
        Selector.scorePlayerOne.style.color = "rgb(36, 228, 164)";
        Selector.scorePlayerTwo.style.color = "crimson";
        Selector.btnPlayerOne.disabled = true;
        Selector.btnPlayerTwo.disabled = true;
    }
};

let calculateScorePlayerTwo = () => {
    Selector.inputScoreCounter.disabled = true;
    let counterTwoValue = Selector.updateCounterPlayerTwo();
    Selector.scorePlayerTwo.innerHTML = `${counterTwoValue}`;
    if (counterTwoValue == Selector.inputScoreCounter.value) {
        Selector.scorePlayerOne.style.color = "crimson";
        Selector.scorePlayerTwo.style.color = "rgb(36, 228, 164)";
        Selector.btnPlayerOne.disabled = true;
        Selector.btnPlayerTwo.disabled = true;
    }
};

let checkIfNot0 = () => {
    if (Selector.inputScoreCounter.value <= 0) {
        alert("Please Insert Valid Number!");
        location.reload();
    }
};

export { calculateScorePlayerOne, calculateScorePlayerTwo, checkIfNot0 };
