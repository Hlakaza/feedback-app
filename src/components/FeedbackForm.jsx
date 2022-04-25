import React from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const onChangeTextHnadler = (event) => {
    console.log(event.target.value);
  };

  const onFormSendHandler = (event) => {
    console.log(event);
  };

  return (
    <Card reverse={false}>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={onChangeTextHnadler}
            type="text"
            placeholder="Write a review"
          />
          <button onClick={onFormSendHandler} type="submit">
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
