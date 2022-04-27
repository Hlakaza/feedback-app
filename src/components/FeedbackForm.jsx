import React from "react";
import Button from "./shared/Button";
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
          <Button onClick={onFormSendHandler} type="submit">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
