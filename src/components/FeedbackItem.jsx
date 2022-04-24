import PropTypes from 'prop-types';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'
function FeedbackItem({item, handleFeeedback}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button type='button' onClick={() => handleFeeedback(item.id)} className='close'>
         <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-dispaly">{item.text}</div>
    </Card>
  )

}

FeedbackItem.propType = {
  item: PropTypes.object
}

export default FeedbackItem;