import { ChevronRightIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'

export function History({ history, currentMove, onJump }) {
  return (
    <ol role="list" className="divide-y divide-gray-100 dark:divide-gray-800">
      {history.map((_squares, move) => (
        <li key={move}>
          {move === 0 && currentMove === 0 ? (
            <p className="px-4 py-4 text-sm/6 font-semibold text-gray-900 sm:px-6 dark:text-white">
              You are at game start
            </p>
          ) : move === currentMove ? (
            <p className="px-4 py-4 text-sm/6 font-semibold text-gray-900 sm:px-6 dark:text-white">
              You are at move #{currentMove}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onJump(move)}
              className="relative flex w-full justify-between gap-x-6 px-4 py-4 hover:bg-gray-50 sm:px-6 dark:hover:bg-white/10"
            >
              <div className="min-w-0">
                <p className="text-sm/6 text-gray-500 dark:text-gray-400">
                  {move > 0 ? `Go to move #${move}` : 'Go to game start'}
                </p>
              </div>
              <ChevronRightIcon className="size-5 flex-none text-gray-400" />
            </button>
          )}
        </li>
      ))}
    </ol>
  )
}
History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
  ).isRequired,
  currentMove: PropTypes.number.isRequired,
  onJump: PropTypes.func.isRequired,
}
