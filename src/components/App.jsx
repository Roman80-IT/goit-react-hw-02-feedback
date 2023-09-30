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

  render() {
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
        </ul>
      </>
    );
  }
}
