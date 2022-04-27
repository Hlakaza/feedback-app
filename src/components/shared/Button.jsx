import PropTypes from 'prop-types';

function Button({children, type, version, isDisabled, onClickHandler}) {
  return (
    <button onClick={onClickHandler} type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}

Button.defaultProps = {
  children: 'Button',
  type: 'button',
  version: 'primary',
  isDisabled: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClickHandler: PropTypes.func
}

export default Button