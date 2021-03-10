//----------
// Variables
//----------
const game = document.querySelector('#game');
const boxes = document.querySelectorAll('.box');
// const player = document.querySelector('#player');
let isPlayerOne = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//----------
// Functions
//----------
function ticTheBox(event) {
    if (!event.target.textContent.match(/[xo]/gi)) {
        event.target.textContent = isPlayerOne ? "X" : "O";
        isPlayerOne = !isPlayerOne;
    }
}

function winnerIs(event) {
    winningConditions.forEach(
        condition => {
            if (boxes[condition[0]].textContent === boxes[condition[1]].textContent && boxes[condition[1]].textContent === boxes[condition[2]].textContent) {
                // console.log('we have a winner');
                return boxes[condition[0]].textContent === "X" ? console.log('Player 1 Won !') : console.log('Player 2 Won !');
            }
        }
    )
}


//----------------
// Event Listeners
//----------------
boxes.forEach(box => box.addEventListener('click', ticTheBox));
game.addEventListener('click', winnerIs)