import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const {
    options: { good, neutral, bad },
  } = props;
  return (
    <div className="Counter_controls">
      <button type="button" className="Button_Good" onClick={good}>
        Good
      </button>
      <button type="button" className="Button_Neutral" onClick={neutral}>
        Neutral
      </button>
      <button type="button" className="Button_Bad" onClick={bad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};
