import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <ul className={css.fbList}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>
          Positive:{positive}
          <span>%</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
