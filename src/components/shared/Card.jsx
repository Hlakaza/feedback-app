import React from 'react'
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

Card.defaultProps = {
  reverse: true
}

export default Card