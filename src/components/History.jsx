import { ChevronRightIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";

export function History({ history, currentMove, onJump }) {
  return (
    <ol role="list" className="divide-y divide-gray-100 dark:divide-gray-800">
      {history.map((_squares, move) => (
        <li key={move}>
          {move === 0 && currentMove === 0 ? (
            <p className="px-6 py-4 text-sm/6 text-gray-500 dark:text-gray-400">
              You are at game start
            </p>
          ) : move === currentMove ? (
            <p className="px-6 py-4 text-sm/6 text-gray-500 dark:text-gray-400">
              You are at move #{currentMove}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onJump(move)}
              className="flex w-full items-center px-6 py-4 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"
            >
              {move > 0 ? `Go to move #${move}` : "Go to game start"}
              <ChevronRightIcon className="ml-auto size-4 flex-none text-gray-400" />
            </button>
          )}
        </li>
      ))}
    </ol>
  );
}
History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(["X", "O", null])).isRequired,
  ).isRequired,
  currentMove: PropTypes.number.isRequired,
  onJump: PropTypes.func.isRequired,
};
