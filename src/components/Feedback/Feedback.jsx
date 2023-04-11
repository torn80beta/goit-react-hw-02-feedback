import React, { Fragment } from 'react';
import FeedbackButtons from 'components/Feedback/FeedbackButtons';
import Statistics from 'components/Feedback/Statistics';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrementGoodVal = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutralValue = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleIncrementBadValue = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please, leave feedback</h2>

        <FeedbackButtons
          incrementGoodValue={this.handleIncrementGoodVal}
          incrementNeutralValue={this.handleIncrementNeutralValue}
          incrementBadValue={this.handleIncrementBadValue}
        />

        <Statistics state={this.state} />
      </div>
    );
  }
}

export default Feedback;
