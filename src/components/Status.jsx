import PropTypes from 'prop-types'
import { calculateWinner } from '../utils.js'
import { PlayerO } from './PlayerO.jsx'
import { PlayerX } from './PlayerX.jsx'

export function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares)

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm/6 font-medium text-gray-900 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">
      {winner ? (
        <>
          Winner:
          {winner === 'X' ? (
            <PlayerX className="size-4 fill-teal-400" />
          ) : (
            <PlayerO className="size-4 fill-amber-400" />
          )}
        </>
      ) : squares.every(Boolean) ? (
        "Scratch: Cat's game"
      ) : (
        <>
          Next player:
          {xIsNext ? (
            <PlayerX className="size-4 fill-teal-400" />
          ) : (
            <PlayerO className="size-4 fill-amber-400" />
          )}
        </>
      )}
    </div>
  )
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
}
