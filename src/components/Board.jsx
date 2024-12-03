import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { Square } from "./Square.jsx";

export function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const canPlay = !winner && !squares.every(Boolean);

  const handleSquareClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {squares.map((square, i) => {
        const highlighted = winner?.lines.includes(i) ?? false;
        const filled = square !== null;
        const disabled = filled || !canPlay;

        return (
          <Square
            key={i}
            value={squares[i]}
            xIsNext={xIsNext}
            disabled={disabled}
            highlighted={highlighted}
            onClick={() => handleSquareClick(i)}
          />
        );
      })}
    </div>
  );
}
Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
  onPlay: PropTypes.func.isRequired,
};
