import yard from './yard.jfif';
import './App.css';
import CompanyProfile from './pages/CompanyProfile';
import { BrowserRouter as Router,  Link,  Route, Switch } from 'react-router-dom';

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
        <Link to="/profile">
          <button type="button" className="button">Business Owner Sign Up</button>
        </Link>
      </div>
      
      <div className="button-container">
        <button type="button"className="button">Business Owner Sign In</button>
      </div>
      
    </div>
  )
 

}


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/profile" component={CompanyProfile} />
      </Switch>
    </main>
    
     
  );
}

export default App;
