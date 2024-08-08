import PropTypes from 'prop-types'
import { calculateWinner } from '../utils.js'

export function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares)
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`

  return <div className="status">{status}</div>
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
}
