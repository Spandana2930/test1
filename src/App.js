import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/landing"
import ForgetPage from "./components/forget";
import ResetPage from "./components/reset";
import createAccount from "./components/create"
const AppContainer = () => {
  
  function renderPage(Component) {
    return <Component />
  
  }

  return (
   
      
      <Router>
        <Switch>
          <Route
            exact
            path = "/"
            render ={() => renderPage(LandingPage)}
          />
          <Route 
          exact path = "/forget" 
          render = {()=>renderPage(ForgetPage)}
         />
         <Route 
          exact path = "/reset" 
          render = {()=>renderPage(ResetPage)}
         />
         <Route 
          exact path = "/createAccount" 
          render = {()=>renderPage(createAccount)}
         />
        </Switch>
      </Router>
   
  );
};

export default AppContainer;