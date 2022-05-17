import { v4 as uuidv4} from 'uuid';
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import "./App.css";

function App({ handleFeedback }) {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback")) {
       setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    if (!!newFeedback) {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
    }
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          handleFeeedback={deleteFeedback}
          feedback={feedback}
        ></FeedbackList>
      </div>
    </>
  );

}

export default App;
