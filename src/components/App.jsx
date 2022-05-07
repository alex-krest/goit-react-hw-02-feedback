import SectionTitle from "./SectionTitle/SectionTitle"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
		  style={{
        height: '100vh',
      //   display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
	  >
		  <SectionTitle title="Please leave feedback"/>
		  {/* рендерит секцию с заголовком и детей (children) */}
		  <FeedbackOptions
			//   options={ }
			//   onLeaveFeedback={ }>
			//   Вынеси блок кнопок в компонент
		  />
			  
			  
		  <Statistics
		  //    ОТОБРАЖЕНИЕ СТАТИСТИКИ:
    //   good={ }
    //   neutral={ }
    //   bad={ }
    //   total={ }
    //   positivePercentage={ }
		  />
		  
		  
    </div>
  );
};
