import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({handleAdd}) {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const onChangeTextHnadler = (event) => {
    setText(event.target.value);
    validateInput()
  };

  const handleSelected = (value) => {
    console.log(value)
    setRating(value);
  }

  const validateInput = () => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 11 charactors and above');
    } else {
      setBtnDisabled(false);
      setMessage(null);

    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card reverse={false}>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selected={rating} select={handleSelected}></RatingSelect>
        <div className="input-group">
          <input value={text}
            onChange={onChangeTextHnadler}
            type="text"
            placeholder="Write a review"
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
