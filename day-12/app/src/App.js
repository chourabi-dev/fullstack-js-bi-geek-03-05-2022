import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Authpage from "./pages/Auth";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetailsPage";

export default class App extends React.Component{
  constructor(props){
    super(props);
  
  }



  render(){
    return (
      <Router>
        <div>
         



   
          <Switch> 
           {
             /**
              * route app
              */
           }


          <Route path="/home" component={ HomePage }   exact /> 
          <Route path="/auth" component={ Authpage }   exact /> 


          <Route path="/produit/:id/:name" component={ ProductDetails }   exact />  
          <Route path="/about" component={ AboutPage }   exact /> 
          <Route path="/" component={ HomePage }   exact /> 
            

          </Switch>
        </div>
      </Router>
    );
  }
}

 