import React from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, total }) => {
  return (
    <div className={css.flexBtns}>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {Boolean(total) && (
        <button
          type="button"
          className={css.btn}
          onClick={() => resetFeedback()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
