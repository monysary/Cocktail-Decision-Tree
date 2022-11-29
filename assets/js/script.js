// DOM variables
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");

// Choice logic
var choiceIndex = 0;
var finalIndex = 0;

// Display options function
function displayChoice() {
    option1.textContent = choices[choiceIndex][0];
    option2.textContent = choices[choiceIndex][1];
}

// Display final questions function
function displayQues() {
    finalIndex--;
    option1.textContent = questions[finalIndex][0];
    option2.textContent = questions[finalIndex][1];
    console.log("final: " + finalIndex);
}

// Display drink
function displayDrink() {

}

// Event listener for choosing options
option1.addEventListener("click", function() {
    if (choiceIndex === 0) {
        finalIndex++;
        choiceIndex++;
        displayChoice();
    } else if (choiceIndex > 0 && choiceIndex < 4) {
        finalIndex *= 2;
        finalIndex--;
        displayChoice();
    } else if (choiceIndex === 5) {
        // Call function to display drinks
    } else {
        finalIndex *= 2;
        finalIndex--;
        displayQues()
    }
    choiceIndex++;
    console.log("choice: " + choiceIndex);
})

option2.addEventListener("click", function() {
    if (choiceIndex === 0) {
        finalIndex += 2;
        choiceIndex++;
        displayChoice();
    } else if (choiceIndex > 0 && choiceIndex < 4) {
        finalIndex *= 2;
        displayChoice()
    } else if (choiceIndex === 5) {
        // Call function to display drinks
    } else {
        finalIndex *= 2;
        displayQues()
    }
    choiceIndex++;
    console.log("choice: " + choiceIndex);
})

displayChoice()