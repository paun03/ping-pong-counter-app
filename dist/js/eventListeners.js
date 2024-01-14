import * as Function from "./functions.js";
import * as Selector from "./selectors.js";

// EVENT LISTENERS / FUNCTIONS

let btnPlayerOneEventListener = () => {
    Selector.btnPlayerOne.addEventListener("click", () => {
        Function.checkIfNot0();
        Function.calculateScorePlayerOne();
    });
};

let btnPlayerTwoEventListener = () => {
    Selector.btnPlayerTwo.addEventListener("click", () => {
        Function.checkIfNot0();
        Function.calculateScorePlayerTwo();
    });
};

let btnResetEventListenerFunction = () => {
        Selector.btnReset.addEventListener("click", () => {
            location.reload(); 
    });
};

export { btnPlayerOneEventListener, btnPlayerTwoEventListener, btnResetEventListenerFunction };