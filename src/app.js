'use strict';

// import log from "./log";
//
// log('log');

// function

function makeVisible(item) {
    item.style.display = 'block';
}

function makeInvisible(item) {
    item.style.display = 'none';
}

function isVisible(item) {
    return item.style.display === 'block';
}

function checkNums(firstValue, secondValue) {
    return [
        !isNaN(parseFloat(firstValue)),
        !isNaN(parseFloat(secondValue))
    ]
}

function displayError(problemBox) {
    console.error(problemBox.innerText);
    //    Logging the problem (the error text is on the HTML)
    makeVisible(problemBox);
}

function displayResult(resultBox, firstValue, secondValue) {
    let result = parseFloat(firstValue) + parseFloat(secondValue);
    let resultMessage = `The result is ${result}`;

    console.log(resultMessage);

    if (!isVisible(resultBox)) {
        makeVisible(resultBox);
    }

    resultBox.innerText = resultMessage;
}

window.addEventListener('load', function () {

    let submitButton = document.querySelector('[rel="js-submit-button"]');
    let problemBox = document.querySelector('[rel="js-problem-box"]');
    let firstNum = document.querySelector('[rel="js-first-number"]');
    let secondNum = document.querySelector('[rel="js-second-number"]');
    let resultBox = document.querySelector('[rel="js-result-box"]');

    // Accessing our inputs and our submit button

    submitButton.addEventListener('click', () => {
        console.log(`first input value ${JSON.stringify(firstNum.value)} & second ${JSON.stringify(secondNum.value)}`);
        //    Input log

        let [firstValueNum, secondValueNum] = [firstNum.value, secondNum.value];

        let valuesCorrect = checkNums(firstValueNum, secondValueNum).every(item => item);

        console.log(valuesCorrect ? 'Values are correct' : 'Values are NOT correct')

        if (!valuesCorrect) {
            // This weird every item is basically checking if all the items are true

            if (isVisible(resultBox)) {
                makeInvisible(resultBox)
            }

            displayError(problemBox);
            //    Displays an error because the values are not correct
        } else {
            //    Erase error block if there is no error
            makeInvisible(problemBox);
            displayResult(resultBox, firstValueNum, secondValueNum);
        }
    });
});