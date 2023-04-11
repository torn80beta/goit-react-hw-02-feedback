import React from 'react';

const FeedbackButtons = ({
  incrementGoodValue,
  incrementNeutralValue,
  incrementBadValue,
}) => (
  <div className="Feedback__Buttons">
    <button type="button" onClick={incrementGoodValue}>
      Good
    </button>
    <button type="button" onClick={incrementNeutralValue}>
      Neutral
    </button>
    <button type="button" onClick={incrementBadValue}>
      Bad
    </button>
  </div>
);

export default FeedbackButtons;
