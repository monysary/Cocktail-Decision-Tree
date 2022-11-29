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
displayChoice()

// Display final questions function
function displayQues() {
    // 
}

// Event listener for choosing options
option1.addEventListener("click", function() {
    if (finalIndex == 0) {
        finalIndex++;
        choiceIndex++;
        displayChoice();
        console.log(finalIndex);
    } else {
        finalIndex *= 2;
        finalIndex--;
        choiceIndex++;
        displayChoice();
        console.log(finalIndex);
    }
})

option2.addEventListener("click", function() {
    if (finalIndex == 0) {
        finalIndex += 2;
        choiceIndex++;
        displayChoice();
        console.log(finalIndex);
    } else {
        finalIndex *= 2;
        choiceIndex++;
        displayChoice()
        console.log(finalIndex);
    }
})
