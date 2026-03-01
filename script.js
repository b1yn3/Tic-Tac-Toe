function createGame(){
    const buttons = document.querySelectorAll('.parent button');
    let currentPlayer = "X";
    const board = Array(9).fill(null);

    // Checking possible wins by listing all the possible wins and comparing it to the board
    function checkIfThereIsAWin() {
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

        for(const line of winList){
            if(board[line[0]] === currentPlayer && board[line[1]] === currentPlayer && board[line[2]] === currentPlayer){
                winner();
            }
        }

    }

    function handleMoveOfPlayer(button, index){
        console.log(currentPlayer);
        board[index] = currentPlayer;
        if(currentPlayer === "X") {
            button.style.color = "#2a9daf";
        } else {
            button.style.color = "#e76f51";
        }
        button.textContent = currentPlayer;
        button.disabled = true;
        checkIfThereIsAWin();
        
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // feed back for who the winner is 
    // To do: add a reset and a visual feedback for the outcome
    function winner(){
        console.log(`The winner is ${currentPlayer}`)
    }

    function resetGame(){
        currentPlayer = "X";
        for(let i =0; i < board.length; i++){
            board[i] = null;
        }

        buttons.forEach(function(button){
            button.textContent = "";
            button.disabled = false;
        })
    }

    function startGame(){
        buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            handleMoveOfPlayer(button, index);
        });

    });
    }

    return {
        startGame,
        resetGame
    };
}

const game = createGame();
game.startGame();

function restartGame(){
    
    game.resetGame();
}

