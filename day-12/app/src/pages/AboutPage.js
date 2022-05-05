import React from "react";
import NavBar from "../componenets/Navbar";
 

export default class AboutPage extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    return (
      <div>
          <NavBar/>

          <h1>About page works !</h1>
      </div>
    );
  }
}

 