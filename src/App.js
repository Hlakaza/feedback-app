
import {useState} from "react";
import './App.css';
import FeedBackList from './components/FeedBackList';
import Header from './components/Header';
import FeedbackData from './data/FeedBackData';

function App() {
  
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
     <Header></Header>
     <div className='container'>
       <FeedBackList feedback={feedback}></FeedBackList>
     </div>
    </>
  );
}

export default App;
