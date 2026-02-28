function createGame(){
    const buttons = document.querySelectorAll('.parent button');
    let currentPlayer = "X";
    const board = Array(9).fill(null);

    function checkForWin() {
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

    function handleMove(button, index){
        board[index] = currentPlayer;
        if(currentPlayer === "X") {
            button.style.color = "#2a9daf";
        } else {
            button.style.color = "#e76f51";
        }
        button.textContent = currentPlayer;
        button.disabled = true;

        checkForWin();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function startGame(){
        buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            handleMove(button, index);
        });

    });
    }

    return {
        startGame
    };
}

const game = createGame();
game.startGame();

