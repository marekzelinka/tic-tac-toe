import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { PlayerO } from "./PlayerO.jsx";
import { PlayerX } from "./PlayerX.jsx";

export function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares);

  return (
    <div className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset dark:text-white dark:ring-gray-800">
      {winner ? (
        <>
          Winner:
          {winner.player === "X" ? (
            <PlayerX className="size-3.5 fill-teal-400" />
          ) : (
            <PlayerO className="size-3.5 fill-amber-400" />
          )}
        </>
      ) : squares.every(Boolean) ? (
        "Scratch: Cat's game"
      ) : (
        <>
          Next player:
          {xIsNext ? (
            <PlayerX className="size-3.5 fill-teal-400" />
          ) : (
            <PlayerO className="size-3.5 fill-amber-400" />
          )}
        </>
      )}
    </div>
  );
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
};
