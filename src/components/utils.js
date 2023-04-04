export const calculateWinner = (squares) => {
    const lines = [        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export const getBotMove = (squares) => {
    // get all available moves
    const availableMoves = squares.reduce((acc, curr, index) => {
        if (!curr) acc.push(index);
        return acc;
    }, []);

    // check for a winning move
    for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        const newSquares = squares.slice();
        newSquares[move] = 'O';
        if (calculateWinner(newSquares)) {
            return move;
        }
    }

    // check for a blocking move
    for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        const newSquares = squares.slice();
        newSquares[move] = 'X';
        if (calculateWinner(newSquares)) {
            return move;
        }
    }

    // make a random move
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
};
