import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  state = {};

  addGood = () => {};
  addNeutral = () => {};
  addBad = () => {};

  render() {
    return (
      <div className="Counter_controls">
        <button type="button" className="Button_Good" onClick={this.addGood}>
          Good
        </button>
        <button
          type="button"
          className="Button_Neutral"
          onClick={this.addNeutral}
        >
          Neutral
        </button>
        <button type="button" className="Button_Bad" onClick={this.addBad}>
          Bad
        </button>
      </div>
    );
  }
}
