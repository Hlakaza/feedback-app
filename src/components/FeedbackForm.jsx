import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const onChangeTextHnadler = (event) => {
    setText(event.target.value);
    validateInput()
  };

  const validateInput = () => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text && text.length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 11 charactors and above');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }

  const onFormSendHandler = (event) => {
    console.log(event);
  };

  return (
    <Card reverse={false}>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input value={text}
            onChange={onChangeTextHnadler}
            type="text"
            placeholder="Write a review"
          />
          <Button isDisabled={btnDisabled} onClickHandler={onFormSendHandler} type="submit">
            Send
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
