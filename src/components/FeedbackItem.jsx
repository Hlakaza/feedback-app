import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({item}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-dispaly">{item.text}</div>
    </Card>
  )

}

FeedbackItem.propType = {
  item: PropTypes.object
}

export default FeedbackItem;