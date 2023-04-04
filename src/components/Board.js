import React, { useState, useEffect } from 'react';
import { calculateWinner, getBotMove } from './utils';


const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [botPlaying, setBotPlaying] = useState(false);

    useEffect(() => {
        if (!xIsNext && botPlaying) {
            // simulate bot move
            setTimeout(() => {
                const botSquares = squares.slice();
                const botMove = getBotMove(botSquares);
                botSquares[botMove] = 'O';
                setSquares(botSquares);
                setXIsNext(true);
            }, 500);
        }
    }, [squares, xIsNext, botPlaying]);

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
                className=" font-bold font-Urbanist bg-gradient-to-br from-orange-400 via-pink-500 to-orange-500 text-white text-4xl w-24 h-24 m-1 rounded-lg focus:outline-none focus:shadow-outline  hover:opacity-75 py-2 px-4 mt-4 mx-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ maxWidth: '50vw', fontSize: 'clamp(2rem, 3vw, 3rem)' }}
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
    } else if (botPlaying && !xIsNext) {
        status = 'I am thinking...';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    const handleBotPlay = () => {
        setBotPlaying(!botPlaying);
        setXIsNext(true);
    };

    return (

        <>

            <div className="flex flex-col items-center justify-center h-screen ">
                <div class="text-center mx-auto ">
                    <h1 class="  font-bold font-Urbanist items-center tracking-wider cursor-pointer relative" style={{ maxWidth: '60vw', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
                        <span class="text-gradient  bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            You must have strong finger muscles to scroll this far! Take a break and let's play a quick game together!
                        </span>
                    </h1>
                </div>
                <div className="font-bold py- px-4 justify-center font-Urbanist text-gradient rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-xs md:text-2xl  relative flex items-center" style={{ maxWidth: '50vw', fontSize: 'clamp(1.5rem, 2vw, 2rem)' }}>
                    <div className="absolute w-full h-full border-4 border-green-500 rounded-md animate-pulse"></div>
                    {status}
                </div>


                <div className="flex flex-col">
                    <div className="flex">
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
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-75 py-2 px-4 mt-4 rounded-lg font-bold text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={handleNewGame}
                >
                    New Game
                </button>
                <div className="my-4">
                    <label className="flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-pink-600"
                            checked={botPlaying}
                            onChange={handleBotPlay}
                        />
                        <span className="ml-2 text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium text-lg transition duration-300 ease-in-out">
                            Play against me
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 text-pink-600 transition duration-300 ease-in-out"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.243 0.317C9.058 -0.031 8.63 -0.103 8.299 0.104L0.318 6.913C-0.153 7.237 -0.142 7.806 0.335 8.137L8.335 14.987C8.66 15.276 9.147 15.276 9.471 14.987L17.471 8.137C17.948 7.806 17.959 7.237 17.504 6.913L9.524 0.316C9.452 0.266 9.348 0.189 9.243 0.317ZM10 11.765V13C10 14.104 9.104 15 8 15C6.896 15 6 14.104 6 13V11.765L3 9V11C3 13.209 4.791 15 7 15C9.209 15 11 13.209 11 11V9L8 11.765Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>

            </div>
        </>
    );
};
export default Board;