import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const {
    options: { onGood, onNeutral, onBad },
  } = props;
  return (
    <div className={s.counter}>
      <button type="button" className={s.button} onClick={onGood}>
        Good
      </button>
      <button type="button" className={s.button} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={s.button} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	onGood: PropTypes.func.isRequired,
	onNeutral: PropTypes.func,
	onBad: PropTypes.func,
};


// -----------------------------------



// import PropTypes from 'prop-types';
// // import s from './FeedbackOptions.module.css';

// const FeedbackOptions = props => {
//   const {
//     options: { good, neutral, bad },
//   } = props;
//   return (
//     <div className="Counter_controls">
//       <button type="button" className="Button_Good" onClick={good}>
//         Good
//       </button>
//       <button type="button" className="Button_Neutral" onClick={neutral}>
//         Neutral
//       </button>
//       <button type="button" className="Button_Bad" onClick={bad}>
//         Bad
//       </button>
//     </div>
//   );
// };

// export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   good: PropTypes.func,
//   neutral: PropTypes.func,
//   bad: PropTypes.func,
// };
