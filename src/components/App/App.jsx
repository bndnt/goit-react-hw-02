import { useState, useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

function App() {
  let stats = JSON.parse(localStorage.getItem("stats")) ?? {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  function updateStats() {
    localStorage.setItem(
      "stats",
      JSON.stringify({
        good: review.good,
        bad: review.bad,
        neutral: review.neutral,
      })
    );
  }
  let total = 0;
  const [review, setRewiew] = useState({
    good: stats.good,
    neutral: stats.neutral,
    bad: stats.bad,
  });

  total = review.good + review.bad + review.neutral;
  const positiveCount = Math.round((review.good / total) * 100);

  useEffect(updateStats, [review]);

  const updateFeedback = (feedbackType) => {
    setRewiew({ ...review, [feedbackType]: review[feedbackType] + 1 });
  };

  function resetFeedback() {
    setRewiew({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("stats");
  }

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={total}
      />
      {total ? (
        <Feedback
          good={review.good}
          neutral={review.neutral}
          bad={review.bad}
          total={total}
          positive={positiveCount}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
