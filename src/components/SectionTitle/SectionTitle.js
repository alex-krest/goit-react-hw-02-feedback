import { Component } from 'react';
import PropsTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
// import s from './SectionTitle.module.css';

export default class SectionTitle extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    title: 'Please leave feedback',
  };

  addGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    return (this.countTotalFeedback() * this.state.good) / 100;
  };

  render() {
    return (
      <section className="Counter">
        <h2 className="Counter_name">{this.state.title}</h2>
        <FeedbackOptions
          options={{
            good: this.addGood,
            neutral: this.addNeutral,
            bad: this.addBad,
            //   onLeaveFeedback={ }>
          }}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.positivePercentage()}
        />
      </section>
    );
  }
}

SectionTitle.propsTypes = {
  title: PropsTypes.string.isRequired,
};
