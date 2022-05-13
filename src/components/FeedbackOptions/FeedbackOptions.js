import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
	const { options, onLeaveFeedback } = props;
	return (
			options.map(option =>(<button key={option}
				type="button"
				className={s.button}
				onClick={() => onLeaveFeedback(option)}>
				{option}
			</button>))
	
	)
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback:PropTypes.func.isRequired
};


