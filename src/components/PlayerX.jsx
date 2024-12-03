import PropTypes from "prop-types";

export function PlayerX({ className }) {
  return (
    <svg viewBox="0 0 66 66" className={className} aria-hidden>
      <path d="m16 2.15 17 17 17-17a3 3 0 0 1 4.24 0l9.61 9.6a3 3 0 0 1 0 4.25l-17 17 17 17a3 3 0 0 1 0 4.24l-9.6 9.61a3 3 0 0 1-4.25 0l-17-17-17 17a3 3 0 0 1-4.24 0l-9.61-9.61a3 3 0 0 1 0-4.24l17-17-17-17a3 3 0 0 1 0-4.24l9.6-9.61a3 3 0 0 1 4.25 0Z" />
    </svg>
  );
}
PlayerX.propTypes = {
  className: PropTypes.string,
};
