import PropTypes from 'prop-types'

export function Square({ value, onClick }) {
  return (
    <button type="button" onClick={onClick} className="square">
      {value}
    </button>
  )
}
Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]),
  onClick: PropTypes.func.isRequired,
}
