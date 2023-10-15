let score = document.getElementById("scorePoints");
let x = 12;
function selectComputerSymbol() {
    const symbols = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    console.log(randomIndex);
    if (randomIndex > -1 && randomIndex < 5)
        return randomIndex;
    else {
        selectComputerSymbol();
    }
}
function updatePickedSymbols(userChoice) {
    const symbols = ['scissors', 'spock', 'paper', 'lizard', 'rock',];
    const userPickedElement = document.getElementById('user-symbol');
    const computerPickedElement = document.getElementById('computer-symbol');
    userPickedElement.style.backgroundImage = `url('images/icon-${symbols[userChoice - 1]}.svg')`;
    const computerChoice = selectComputerSymbol();
    computerPickedElement.style.backgroundImage = `url('images/icon-${symbols[computerChoice]}.svg')`;
    winningCondition(userChoice, computerChoice + 1);
}

for (let i = 1; i <= 5; i++) {
    const symbolElement = document.getElementById(`symbol${i}`);
    symbolElement.addEventListener('click', function () {
        updatePickedSymbols(i);
        let page1 = document.getElementsByClassName("container2")[0];
        let page2 = document.getElementsByClassName("container3")[0];
        page1.style.display = "none";
        page2.style.display = "flex";
    });
}
function winningCondition(userSelection, computerselection) {
    let result;
    if (userSelection == 1) {
        if (computerselection == 3 || computerselection == 4) {
            result = 1;
        }
        else if (userSelection == computerselection) {
            result = -1;
        }
        else {
            result = 0;
        }
    }
    else if (userSelection == 2) {
        if (computerselection == 1 || computerselection == 5) {
            result = 1;
        }
        else if (userSelection == computerselection) {
            result = -1;
        }
        else {
            result = 0;
        }
    }
    else if (userSelection == 3) {
        if (computerselection == 5 || computerselection == 2) {
            result = 1;
        }
        else if (userSelection == computerselection) {
            result = -1;
        }
        else {
            result = 0;
        }
    }
    else if (userSelection == 4) {
        if (computerselection == 2 || computerselection == 3) {
            result = 1;
        }
        else if (userSelection == computerselection) {
            result = -1;
        }
        else {
            result = 0;
        }
    }
    else if (userSelection == 5) {
        if (computerselection == 4 || computerselection == 1) {
            result = 1;
        }
        else if (userSelection == computerselection) {
            result = -1;
        }
        else {
            result = 0;
        }
    }

    if (result == 1) {
        x++;
        score.textContent = x;
        let condition = document.getElementById("result");
        condition.innerHTML = "YOU WIN";

    }
    else if (result == -1) {
        let condition = document.getElementById("result");
        condition.innerHTML = "DRAW";
    }
    else {
        x--;
        score.textContent = x;
        let condition = document.getElementById("result");
        condition.innerHTML = "YOU LOSE";
    }
}
let button = document.getElementById("playAgain");
button.addEventListener('click', function () {
    let page1 = document.getElementsByClassName("container2")[0];
    let page2 = document.getElementsByClassName("container3")[0];
    page1.style.display = "flex";
    page2.style.display = "none";
});
let rules = document.getElementById("rule-button");
rules.addEventListener("click", function () {
    document.getElementById("rule-image").style.display = "block";
    document.getElementsByClassName("container")[0].style.opacity = 0.5;
});
let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function () {
    document.getElementById("rule-image").style.display = "none";
    document.getElementsByClassName("container")[0].style.opacity = 1;
});