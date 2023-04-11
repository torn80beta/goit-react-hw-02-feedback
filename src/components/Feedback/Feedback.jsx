import React from 'react';
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
    total: this.props.initialValue,
    positive: this.props.initialValue,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    this.setState({ total: totalFeedbacks });
  };

  handleIncrementGoodVal = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.countTotalFeedback
    );
  };

  handleIncrementNeutralValue = () => {
    this.setState(
      prevState => ({ neutral: prevState.neutral + 1 }),
      this.countTotalFeedback
    );
  };

  handleIncrementBadValue = () => {
    this.setState(
      prevState => ({ bad: prevState.bad + 1 }),
      this.countTotalFeedback
    );
  };

  render() {
    return (
      <div className="Feedback">
        <h2>Please, leave feedback</h2>

        <FeedbackButtons
          incrementGoodValue={this.handleIncrementGoodVal}
          incrementNeutralValue={this.handleIncrementNeutralValue}
          incrementBadValue={this.handleIncrementBadValue}
          //   incrementTotalValue={this.countTotalFeedback}
        />

        <Statistics state={this.state} />
      </div>
    );
  }
}

export default Feedback;
