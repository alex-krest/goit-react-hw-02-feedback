import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
	  <div className={s.Statistics}>
		<h2 className={s.Statistics_name}>Statistics</h2>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <span className="Good">Good: {good}
          </span>
          <span className={s.Statistics_item}>Neutral: {neutral}
          </span>
          <span className={s.Statistics_item}>Bad: {bad}
          </span>
          <span className={s.Statistics_item}>Total: {total}
          </span>
          <span className={s.Statistics_item}>Positive Feedback: {positivePercentage}%
          </span>
        </>
      )}
    </div>
  );
};

export default Statistics;

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};








// --------------------------------------------


// import PropTypes from 'prop-types';
// import Notification from '../Notification';
// // import s from './Statistics.module.css';

// const Statistics = props => {
//   const { good, neutral, bad, total, positivePercentage } = props;

//   return (
//     <div className="Statistics">
//       {total === 0 ? (
//         <Notification message="There is no feedback" />
//       ) : (
//         <>
//           <span className="Good">
//             <p>Good: {good} </p>
//           </span>
//           <span className="Neutral">
//             <p>Neutral: {neutral}</p>
//           </span>
//           <span className="Bad">
//             <p>Bad: {bad}</p>
//           </span>
//           <span className="Total">
//             <p>Total: {total}</p>
//           </span>
//           <span className="Positive">
//             <p>Positive Feedback: {positivePercentage}%</p>
//           </span>
//         </>
//       )}
//     </div>
//   );
// };

// export default Statistics;

// Statistics.protoTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
