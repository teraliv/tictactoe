// Tic Tac Toe
var Agent = function () {

}

var Data = function (move, utility) {
    this.move = move;
    this.utility = utility;
}

// selecMove is our minimax algorithm
Agent.prototype.selectMove = function(board) {

    var data = minimax(board);
    return data.move;



    // Marriot's code
    // var freeCells = [];
    // for (var i = 1; i < 10; i++) {
    //     if (board.cellFree(i)) {
    //         freeCells.push(i);
    //     }
    // }
    // return freeCells[Math.floor(Math.random() * freeCells.length)];

}


// Agent.prototype.mimimax = function(board) {
function minimax(board, cell) {

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
            var gb = board.clone();   // make a copy of current game board
            gb.move(freeCells[i]);
            currentMove = freeCells[i];
            data = minimax(gb, freeCells[i]);

            if (move === undefined) {
                if (cell === undefined)
                    move = currentMove;
                else
                    move = cell;
            }

            if (utility === undefined) {
                utility = data.utility;
                // move = freeCells[0];
                // move = freeCells[i];
                // data.move = move;
            }
            else if (utility < data.utility) {
                utility = data.utility;
                // move = currentMove;
                // move = freeCells[i];
                // data.utility = utility;
                // data.move = move;
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

            if (move === undefined) {
                if (cell === undefined)
                    move = currentMove;
                else
                    move = cell;
            }

            if (utility === undefined) {
                utility = data.utility;
                // move = freeCells[0];
                // data.move = move;
            }
            else if (utility > data.utility) {
                utility = data.utility;
                move = currentMove;
                // data.utility = utility;
                // data.move = move;
            }

        }
    }

    return new Data(move, utility);
}
