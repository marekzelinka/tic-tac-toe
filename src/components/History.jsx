import PropTypes from 'prop-types'

export function History({ history, currentMove, onJump }) {
  return (
    <ol>
      {history.map((_squares, move) => (
        <li key={move}>
          {move === 0 && currentMove === 0 ? (
            'You are at game start'
          ) : move === currentMove ? (
            `You are at move #${currentMove}`
          ) : (
            <button type="button" onClick={() => onJump(move)}>
              {move > 0 ? `Go to move #${move}` : 'Go to game start'}
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
