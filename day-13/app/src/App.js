import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HttpCallPage from "./pages/HttpCallPage";
import NotFoundPage from "./pages/NotFoundPage";
 

export default class App extends React.Component{
  constructor(props){
    super(props);
  
  }



  render(){
    return (
      <Router>
        <div> 
   
          <Switch>  
          <Route path="/app" component={ HomePage }   exact /> 
          <Route path="/call-backend" component={ HttpCallPage }   exact /> 
               
              <Route path="*" component={ NotFoundPage }   />  
              
          </Switch>
        </div>
      </Router>
    );
  }
}

 