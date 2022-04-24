import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types';
function FeedBackList({feedback, handleFeeedback}) {
  if (!feedback || feedback.length === 0) {
     return <p>There is no feedback list.</p>
  }
  return (
    feedback.map((item) => (
      <FeedbackItem key={item.id} handleFeeedback={handleFeeedback} item={item}></FeedbackItem>
    ))
  )

}
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.number.isRequired,
       text: PropTypes.string.isRequired,
       rating: PropTypes.number.isRequired
      })
  )
}

export default FeedBackList