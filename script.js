//grab the elements in the class square and set the turns as arrays
let square = document.querySelectorAll(".square");
let playerturn = document.getElementById("turn")
let play = 0;
let won = false;
let winner = document.getElementById("winner");
let reset = document.getElementById("btn-reset");

//add listener to reset button
reset.addEventListener("click", resetGame);

//add the listener and game function to all the squares
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", game);
};

// function to add x and o and call for a winner
function game(sqr) {
    let classSquare = sqr.target.classList;

    //it was clicked already
    if (classSquare.length >= 2) {
        return;
    }
    //stop game if won
    else if (won == true) {
        return;
    }
    //play
    else {
        //Add X on even turns
        if (play % 2 == 0 || play == 0) {
            sqr.target.classList.add("x");
            play++;
            playerturn.innerHTML = "Turn of Player O";
        }
        //Add O on odd turns
        else {
            sqr.target.classList.add("o");
            play++;
            playerturn.innerHTML = "Turn of Player X";
        }
        winGame()
    }
};

//after each turn it will check the state of the game
function winGame() {
    let full = []
    let size = square.length

    for (let i = 0; i < size; i++) {
        full[i] = square[i].classList[1];
    }

    //check X won
    if (full[0] == "x" && full[1] == "x" && full[2] == "x" ||
        full[3] == "x" && full[4] == "x" && full[5] == "x" ||
        full[6] == "x" && full[7] == "x" && full[8] == "x" ||
        full[0] == "x" && full[3] == "x" && full[6] == "x" ||
        full[1] == "x" && full[4] == "x" && full[7] == "x" ||
        full[2] == "x" && full[5] == "x" && full[8] == "x" ||
        full[0] == "x" && full[4] == "x" && full[8] == "x" ||
        full[2] == "x" && full[4] == "x" && full[6] == "x"
    ) {
        won = true;
        winner.style.display = "block";
        winner.innerHTML = "Player X win!";
        playerturn.style.display = "none";
    }

    // Check O won
    if (full[0] == "o" && full[1] == "o" && full[2] == "o" ||
        full[3] == "o" && full[4] == "o" && full[5] == "o" ||
        full[6] == "o" && full[7] == "o" && full[8] == "o" ||
        full[0] == "o" && full[3] == "o" && full[6] == "o" ||
        full[1] == "o" && full[4] == "o" && full[7] == "o" ||
        full[2] == "o" && full[5] == "o" && full[8] == "o" ||
        full[0] == "o" && full[4] == "o" && full[8] == "o" ||
        full[2] == "o" && full[4] == "o" && full[6] == "o"
    ) {
        won = true;
        winner.style.display = "block";
        winner.innerHTML = "Player O win!";
        playerturn.style.display = "none";
    }

    //check if board is full and its a draw
    else if (won == false) {
        if (full.includes(undefined)) {
            return;
        }
        else {
            winner.style.display = "block";
            winner.innerHTML = "It's a Draw!";
            playerturn.style.display = "none";
        }
    };
};

//reset the game at any state
function resetGame() {
    //clean who won
    won = false;
    // clean boardgame
    play = 0;
    winner.style.display = "none";
    // player turn reset
    playerturn.style.display = "block";
    playerturn.innerHTML = "Turn of Player X";
    // reset classes to square maybe an easy way to do it?
    for (let i = 0; i < square.length; i++) {
        square[i].className = "square";
    };

}

