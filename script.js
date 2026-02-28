const buttons = document.querySelectorAll('.parent button');
let currentPlayer = "X";
const board = Array(9).fill(null);

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        board[index] = currentPlayer;
        this.disabled = true;
        if (currentPlayer === "O") {
            this.style.color = "#2a9daf";
        } else {
            this.style.color = "#e76f51";
        }
        this.textContent = currentPlayer;
        checkForWin(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });

});


function checkForWin(currentPlayer) {
    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(const win of winList){
        if(board[win[0]] === currentPlayer && board[win[1]] === currentPlayer && board[win[2]] === currentPlayer){
            console.log("WIN");
        }
    }

}

