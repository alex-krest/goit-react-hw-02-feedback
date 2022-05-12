// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const {options, onLeaveFeedback}=props
	options.map(option => {
		return (
			<button key={option}
				type="button"
				className={s.button}
				onClick={() => onLeaveFeedback(option)}>
				{option}
			</button>
		)
	})
};

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
// 	options:PropTypes.objectOf(
// 	  PropTypes.func.isRequired,
// 	)
// };


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
