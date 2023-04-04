import React, { useState } from 'react';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = [...squares];
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const handleNewGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    const renderSquare = (i) => {
        return (
            <button
                className=" font-bold font-Urbanist bg-gradient-to-br from-green-400 to-blue-500 text-white text-4xl w-24 h-24 m-1 rounded-lg focus:outline-none focus:shadow-outline  hover:opacity-75 py-2 px-4 mt-4 mx-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ maxWidth: '50vw', fontSize: 'clamp(2rem, 3vw, 3rem)' }}
                onClick={() => handleClick(i)}
            >
                {squares[i]}
            </button>


        );
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="flex flex-col items-center justify-center  h-screen">
            <div className=" font-bold font-Urbanist text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-xs md:text-2xl block" style={{ maxWidth: '50vw', fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}>{status}</div>
            <div className="flex flex-col" >
                <div className="flex" >
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="flex">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="flex">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={handleNewGame}
            >
                New Game
            </button>


        </div>
    );
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
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
}

export default Board;