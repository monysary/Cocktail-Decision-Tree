// DOM variables
const body = document.getElementsByTagName("body");
const main = document.getElementsByTagName("main");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const textBtn1 = document.getElementById("textBtn1")
const textBtn2 = document.getElementById("textBtn2")
const finalDrink = document.getElementById("final-drink");
const restartBtn = document.getElementById("restart-btn");
const title = document.getElementById("title");
const line = document.getElementById("line");
const ingredList = document.getElementById("ingred-list");
const wrapper = document.getElementById("wrapper");

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
    choiceIndex++;
    finalDrink.textContent = drinksArr[finalIndex];
    finalDrink.classList.add("heading-underline")
    option1.setAttribute("class", "display-none");
    option2.setAttribute("class", "display-none");
    restartBtn.setAttribute("class", "button-style");
    body[0].className = "grid-collapse";
    main[0].className = "main-desktop-grid";
    ingredList.textContent = drinksIngred[finalIndex];
}

// Event listener for displayed drink name to displaying drink ingredients
wrapper.addEventListener("click", () => {
    if (ingredList.className === "ingred-box box-collapse") {
        ingredList.setAttribute("class", "ingred-box box-expand");
    } else {
        ingredList.setAttribute("class", "ingred-box box-collapse");
    }
})

// Event listener for pressing restart button
restartBtn.addEventListener("click", () => {
    location.reload();
})

// Event listener for choosing left option
option1.addEventListener("click", () => {
    textAnimateIndex +=1;
    if (choiceIndex === 0) {
        finalIndex++;
        choiceIndex++;
        setTimeout(displayChoice, 200);
    } else if (choiceIndex > 0 && choiceIndex < 4) {
        finalIndex *= 2;
        finalIndex--;
        setTimeout(displayChoice, 200);
    } else if (choiceIndex === 5) {
        finalIndex *= 2;
        setTimeout(displayDrink, 200);
        return
    } else {
        finalIndex *= 2;
        finalIndex--;
        setTimeout(displayQues, 300);
    }
    choiceIndex++;
})

// Event listener for choosing right option
option2.addEventListener("click", () => {
    textAnimateIndex +=1;
    if (choiceIndex === 0) {
        finalIndex += 2;
        choiceIndex++;
        setTimeout(displayChoice, 200);
    } else if (choiceIndex > 0 && choiceIndex < 4) {
        finalIndex *= 2;
        setTimeout(displayChoice, 200);
    } else if (choiceIndex === 5) {
        finalIndex *= 2;
        finalIndex++;
        setTimeout(displayDrink, 200);
        return
    } else {
        finalIndex *= 2;
        setTimeout(displayQues, 300);
    }
    choiceIndex++;
})

displayChoice();