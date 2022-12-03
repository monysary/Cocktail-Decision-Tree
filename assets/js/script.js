// DOM variables
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const textBtn1 = document.getElementById("textBtn1")
const textBtn2 = document.getElementById("textBtn2")
const finalDrink = document.getElementById("final-drink");
const restartBtn = document.getElementById("restart-btn");
const title = document.getElementById("title");
const line = document.getElementById("line");

// Index variables for pulling questions and drinks
let choiceIndex = 0;
let finalIndex = 0;

// Button text animation variables
const textAnimate = [
    "text-animate-25",
    "text-animate-50",
    "text-animate-75",
    "text-animate-100"
]

let textAnimateIndex = -1;

// Display options function
displayChoice = () => {
    // option1.textContent = choices[choiceIndex][0];
    // option2.textContent = choices[choiceIndex][1];
    textBtn1.classList.add(textAnimate[textAnimateIndex]);
    textBtn2.classList.add(textAnimate[textAnimateIndex]);
}

// Display final questions function
displayQues = () => {
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
displayDrink = () => {
    finalDrink.textContent = drinksArr[finalIndex];
    option1.setAttribute("class", "display-none");
    option2.setAttribute("class", "display-none");
    restartBtn.setAttribute("class", "button-style");
}

// Restart button function
restartAdv = () => {
    choiceIndex = 0;
    finalIndex = 0;
    location.reload();
}

// Event listener for pressing restart button
restartBtn.addEventListener("click", () => {
    restartAdv()
})

// Event listener for choosing left option
option1.addEventListener("click", () => {
    textAnimateIndex +=1;
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
option2.addEventListener("click", () => {
    textAnimateIndex +=1;
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