import React from 'react'
import PropTypes from 'prop-types';
function FeedbackStats({feedback}) {

  const avarage = feedback.reduce((acc, curr) =>  {
    return acc + curr.rating
  }, 0) / feedback.length;

  avarage.toFixed(1);

  return (
    <div className='feedback-stats'>
      <div className='reviews'>
        {feedback.length} Reviews
      </div>
      <div className='avarage-reviews'>
        Average Rating {isNaN(avarage) ? 0 : avarage}
      </div>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats