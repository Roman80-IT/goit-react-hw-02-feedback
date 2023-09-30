import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод збільшення відгуків (одним методом)
  incrementFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1 className="text">Please leave feedback</h1>
        <ul>
          <li>
            <button onClick={() => this.incrementFeedback('good')}>Good</button>
          </li>
          <li>
            <button onClick={() => this.incrementFeedback('neutral')}>
              Neutral
            </button>
          </li>
          <li>
            <button onClick={() => this.incrementFeedback('bad')}>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total feedback: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentage.toFixed(2)}%</li>
        </ul>
      </>
    );
  }
}
