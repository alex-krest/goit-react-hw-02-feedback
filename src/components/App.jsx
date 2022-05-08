import SectionTitle from "./SectionTitle/SectionTitle"



export const App = () => {
// 	state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }
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
		  
    </div>
  );
};
