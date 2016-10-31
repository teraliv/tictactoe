// Tic Tac Toe
var Agent = function () {

}

// selecMove is our minimax algorithm
Agent.prototype.selectMove = function(board) {


    return minimax(board).move;


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
    var move = cell;
    var utility;

    if (board.gameOver() !== 0) {
        // return board.gameOver();

        if (board.gameOver() === 1) {
            utility = 1;
            return {move, utility};
        }
        if (board.gameOver() === 2) {
            utility = -1;
            return {move, utility};
        }
        if (board.gameOver() === 3) {
            utility = 0;
            return {move, utility};
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
            // move = freeCells[i];
            gb.move(freeCells[i]);
            minimax(gb, freeCells[i]);
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
            // move = freeCells[i];
            gb.move(freeCells[i]);
            minimax(gb, freeCells[i]);
        }
    }

    // return {move, utility};
}
