import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import CompanyProfile from './pages/CompanyProfile';
import CompanyAddress from './pages/CompanyAddress';
=======
>>>>>>> 25e718535bcf86a55ec30d62ad0984fa3e707532
import styles from './components/layout.modules.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';


ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <CompanyAddress />
  </React.StrictMode>,
=======
  <Router>
    <App />
  </Router>,
>>>>>>> 25e718535bcf86a55ec30d62ad0984fa3e707532
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
