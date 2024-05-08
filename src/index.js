import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Landpage from './Pages/Landpage'
import Contact from './components/Contact'
import AboutUs from './Pages/aboutus'
import Howtouse from './Pages/Howtousen'
import Voting from './Pages/votingmain'
import Test from './Pages/test'
import Signup  from './components/Signup'
import VotingResults from './Pages/results';
const router = createBrowserRouter([
  {
  path:"/",
  element:<div><App/></div>
  },
  {
    path:"/Contact",
    element:<div><Contact/></div>
  },
  {
    path:"/votingmain",
    element:<div><Voting/></div>
  },
  {
    path:"/aboutus",
    element:<div><AboutUs/></div>
  },
  {
    path:"/Howtousen",
    element:<div><Howtouse/></div>
  },
  {
    path:"/Signup",
    element:<div><Signup/></div>
  },
  {
    path:"/results",
    element:<div><VotingResults/></div>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
