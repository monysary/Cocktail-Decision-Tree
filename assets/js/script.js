// DOM variables
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var finalDrink = document.querySelector("#final-drink");
var restartBtn = document.querySelector("#restart-btn");
var title = document.querySelector("#title");
var line = document.querySelector("#line");

// Index variables for pulling questions and drinks
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
    finalDrink.textContent = "Final Choice"
    title.setAttribute("class", "display-none");
    line.setAttribute("class", "display-none");
    option1.setAttribute("class", "button-final");
    option2.setAttribute("class", "button-final");
}

// Display drink
function displayDrink() {
    finalDrink.textContent = drinksArr[finalIndex];
    option1.setAttribute("class", "display-none");
    option2.setAttribute("class", "display-none");
    restartBtn.setAttribute("class", "button-style");
}

// Restart button function
function restartAdv() {
    choiceIndex = 0;
    finalIndex = 0;
    location.reload();
}

// Event listener for pressing restart button
restartBtn.addEventListener("click", function() {
    restartAdv()
})

// Event listener for choosing left option
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
        finalIndex *= 2;
        displayDrink();
        return
    } else {
        finalIndex *= 2;
        finalIndex--;
        displayQues()
    }
    choiceIndex++;
})

// Event listener for choosing right option
option2.addEventListener("click", function() {
    if (choiceIndex === 0) {
        finalIndex += 2;
        choiceIndex++;
        displayChoice();
    } else if (choiceIndex > 0 && choiceIndex < 4) {
        finalIndex *= 2;
        displayChoice()
    } else if (choiceIndex === 5) {
        finalIndex *= 2;
        finalIndex++;
        displayDrink();
        return
    } else {
        finalIndex *= 2;
        displayQues()
    }
    choiceIndex++;
})

displayChoice()