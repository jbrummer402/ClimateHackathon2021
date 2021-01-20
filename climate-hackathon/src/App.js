import yard from './yard.jfif';
import './App.css';

function Yard(){

  return(
    <div>
      <img src={yard} alt="Hoboken Yard Photo" className="yard"/>
      <div className="large">C4B</div>
      <div className="small">Climate For Business</div>
    </div>
      
    
      
  )
}

function LandingPage(){

  return (
    <div>
      <Yard></Yard>
      <div className="button-container">
        <button type="button" className="button">Business Owner Sign Up</button>
      </div>
      
      <div className="button-container">
        <button type="button"className="button">Business Owner Sign In</button>
      </div>
      
    </div>
  )
 

}


function App() {
  return (
    
    <LandingPage></LandingPage>
     
  );
}

export default App;
