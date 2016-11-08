// Tic Tac Toe
var Agent = function () {

}

var Data = function (move, utility) {
    this.move = move;
    this.utility = utility;
}

Agent.prototype.selectMove = function(board) {

    var size = freeCells(board), cell;

    var data = minimax(board, cell, size);
    return data.move;
}

/**
* Minimax algorithm to find a best move
* @param {GameBoard} board - current state of gameboard
* @param {Number} cell - current cell to move
* @param {Number} size - current number of empty cells
*/
function minimax(board, cell, size) {

    // var minValue, maxValue;
    var move, currentMove;
    var utility;

    var data = new Data(cell, utility);
    // var temp = new Data(move, utility);

    if (board.gameOver() !== 0) {

        if (board.gameOver() === 1) {
            data.utility = 1;
            return data;
        }
        if (board.gameOver() === 2) {
            data.utility = -1;
            return data;
        }
        if (board.gameOver() === 3) {
            data.utility = 0;
            return data;
        }

    }

    // X turn
    if (board.playerOne) {
        var freeCells = [];

        // look for all free cells/possible moves
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                freeCells.push(i);
            }
        }

        // loop through all possible moves
        for (var i = 0; i < freeCells.length; i++) {
            var gb = board.clone();             // make a copy of current game board
            gb.move(freeCells[i]);
            currentMove = freeCells[i];
            data = minimax(gb, freeCells[i]);

            // select proper move for current board
            if (move === undefined) {
                if (cell === undefined)
                    move = currentMove;
                else
                    move = cell;
            }

            // update utility value
            if (utility === undefined) {
                utility = data.utility;
            }
            // find better utility value
            else if (utility < data.utility) {
                utility = data.utility;

                // make the right move choice for initial board state
                if (freeCells.length == size)
                    move = currentMove;
            }
        }
    }

    // O turn
    if (!board.playerOne) {
        var freeCells = [];

        // look for all free cells/possible moves
        for (var i = 1; i < 10; i++) {
            if (board.cellFree(i)) {
                freeCells.push(i);
            }
        }

        // loop through all possible moves
        for (var i = 0; i < freeCells.length; i++) {
            var gb = board.clone();   // make a copy of current game board
            gb.move(freeCells[i]);
            currentMove = freeCells[i];
            data = minimax(gb, freeCells[i]);

            // select proper move for current board
            if (move === undefined) {
                if (cell === undefined)
                    move = currentMove;
                else
                    move = cell;
            }

            // update utility value
            if (utility === undefined) {
                utility = data.utility;
            }
            // find better utility value
            else if (utility > data.utility) {
                utility = data.utility;

                // make the right move choice for initial board state
                if (freeCells.length == size)
                    move = currentMove;
            }

        }
    }

    return new Data(move, utility);
}

/**
* A function to find number of empty cells for the given gameboard
*/
function freeCells(board) {
    var emptyCells = 0;

    for (var i = 1; i < 10; i++) {
        if (board.cellFree(i)) emptyCells++;
    }

    return emptyCells;
}
