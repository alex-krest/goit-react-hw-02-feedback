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
	// option=Object.keys(this.state)
	 
	//  onLeaveFeedback = () =>
	//  { this.option.map((id)=>[option] : [prevState.option] + 1 )}
	// }
	 
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
				 onLeaveFeedback={{
					onGood: this.addGood,
					onNeutral: this.addNeutral,
					onBad:this.addBad,
				} }
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
