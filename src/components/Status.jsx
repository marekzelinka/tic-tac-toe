import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { PlayerO } from "./PlayerO.jsx";
import { PlayerX } from "./PlayerX.jsx";

export function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares);

  return (
    <div
      role="status"
      className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 uppercase ring-1 ring-gray-500/20 ring-inset dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20"
      aria-label="Current player's turn"
    >
      {winner ? (
        <>
          {winner.player === "X" ? (
            <PlayerX className="size-3.5 fill-teal-400" />
          ) : (
            <PlayerO className="size-3.5 fill-amber-400" />
          )}
          Won
        </>
      ) : squares.every(Boolean) ? (
        "Scratch: Cat's game"
      ) : (
        <>
          {xIsNext ? (
            <PlayerX className="size-3.5 fill-teal-400" />
          ) : (
            <PlayerO className="size-3.5 fill-amber-400" />
          )}
          Turn
        </>
      )}
    </div>
  );
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
};
