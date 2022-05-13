import { Component } from 'react';
import SectionTitle from "./SectionTitle/SectionTitle"
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';




 export default class App extends Component{
	state = {
  good: 0,
  neutral: 0,
  bad: 0
	}
	options=Object.keys(this.state)
	//  ----------------------------------
	 onLeaveFeedback = (options) => {
		 this.setState(prevState=>{
			 return {
				 [options]: prevState[options] + 1
			 }
		 }
		 )
	 }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    return (( this.state.good/this.countTotalFeedback() ) * 100).toFixed(2);
  };
	 
	 render() {
		 return (
    <div
		  style={{
        height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
				 textAlign:'center',
        fontSize: 40,
        color: '#010101'
      }}
	  >
			 <SectionTitle
				 title="Please leave feedback" >
				 <FeedbackOptions
				 options={this.options}
				 onLeaveFeedback={this.onLeaveFeedback}
				 />
				 {this.countTotalFeedback() === 0 ? (
				 <Notification message="There is no feedback" />) :
				 (<Statistics
					 good={this.state.good}
					 neutral={this.state.neutral}
					 bad={this.state.bad}
					 total={this.countTotalFeedback()} positivePercentage={this.positivePercentage()}
				 />)
			 }
				 </SectionTitle>
    </div>
  );
}
};














// import SectionTitle from "./SectionTitle/SectionTitle"


// export const App = () => {
// // 	state = {
// //   good: 0,
// //   neutral: 0,
// //   bad: 0
// // }
//   return (
//     <div
// 		  style={{
//         height: '100vh',
//       //   display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
// 	  >
// 		  <SectionTitle title="Please leave feedback"/>
		  
//     </div>
//   );
// };
