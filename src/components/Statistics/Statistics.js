import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { render } from '@testing-library/react';

export default class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = () => {
    this.setState({
      valueGood: 0,
      valueNeutral: 0,
      valueBad: 0,
    });
  };

  render() {
    return (
      <div className="Statistics">
        <span className="Good_value">
          <p>Good:</p>
          <>{this.state.good}</>
        </span>
        <span className="Neutral_value">
          <p>Neutral:</p>
          <>{this.state.neutral}</>
        </span>
        <span className="Bad_value">
          <p>Bad:</p>
          <>{this.state.bad}</>
        </span>
      </div>
    );
  }
}
