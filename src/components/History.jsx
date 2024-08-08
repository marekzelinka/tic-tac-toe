import PropTypes from 'prop-types'

export function History({ history, onJump }) {
  return (
    <ol>
      {history.map((_squares, move) => (
        <li key={move}>
          <button type="button" onClick={() => onJump(move)}>
            {move > 0 ? `Go to move #${move}` : 'Go to game start'}
          </button>
        </li>
      ))}
    </ol>
  )
}
History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
  ).isRequired,
  onJump: PropTypes.func.isRequired,
}
