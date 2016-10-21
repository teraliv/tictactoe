// Tic Tac Toe
var Agent = function () {

}

Agent.prototype.selectMove = function(board) {

    if (board.gameOver() !== 0) {
        return board.gameOver();
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
            gb.move(i);
            this.selectMove(gb);
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
            gb.move(i);
            this.selectMove(gb);
        }
    }


    // Marriot's code
    // var freeCells = [];
    // for (var i = 1; i < 10; i++) {
    //     if (board.cellFree(i)) {
    //         freeCells.push(i);
    //     }
    // }
    // return freeCells[Math.floor(Math.random() * freeCells.length)];
}
