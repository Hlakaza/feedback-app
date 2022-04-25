import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";

function App({ handleFeedback }) {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("APP", id);
    if (window.confirm("Are you sure you want to delete feedback")) {
       setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackForm></FeedbackForm>
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
