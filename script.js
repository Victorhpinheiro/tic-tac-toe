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
    //check X won
    if (square[0].className == "square x" && square[3].className == "square x" && square[6].className == "square x" ||
        square[1].className == "square x" && square[4].className == "square x" && square[7].className == "square x" ||
        square[2].className == "square x" && square[5].className == "square x" && square[8].className == "square x" ||
        square[0].className == "square x" && square[1].className == "square x" && square[2].className == "square x" ||
        square[3].className == "square x" && square[4].className == "square x" && square[5].className == "square x" ||
        square[6].className == "square x" && square[7].className == "square x" && square[8].className == "square x" ||
        square[0].className == "square x" && square[4].className == "square x" && square[8].className == "square x" ||
        square[2].className == "square x" && square[4].className == "square x" && square[6].className == "square x"
    ) {
        won = true;
        winner.style.display = "block";
        winner.innerHTML = "Player X win!";
        playerturn.style.display = "none";
    }

    // Check O won
    if (square[0].className == "square o" && square[3].className == "square o" && square[6].className == "square o" ||
        square[1].className == "square o" && square[4].className == "square o" && square[7].className == "square o" ||
        square[2].className == "square o" && square[5].className == "square o" && square[8].className == "square o" ||
        square[0].className == "square o" && square[1].className == "square o" && square[2].className == "square o" ||
        square[3].className == "square o" && square[4].className == "square o" && square[5].className == "square o" ||
        square[6].className == "square o" && square[7].className == "square o" && square[8].className == "square o" ||
        square[0].className == "square o" && square[4].className == "square o" && square[8].className == "square o" ||
        square[2].className == "square o" && square[4].className == "square o" && square[6].className == "square o"
    ) {
        won = true;
        winner.style.display = "block";
        winner.innerHTML = "Player O win!";
        playerturn.style.display = "none";
    }

    //check if board is full and its a draw
    else if (won == false) {
        var full = []
        // feels weird have to interate everytime someone clicks, maybe we store before and update just the clicked?
        //TODO Better
        for (let i = 0; i < square.length; i++) {
            full[i] = square[i].classList[1];
        }
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

console.log(square[0].classList)
