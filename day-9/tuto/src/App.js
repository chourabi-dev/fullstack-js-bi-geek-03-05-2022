import React from 'react';
import './App.css';
import Contact from './componenets/contact';

export default  class App extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    const element = <h1>welcome to react</h1>;
    return (
      <div className="App">
        { element }
  
        <h3>welcome to our app</h3>
  
        <hr />
         
  
        <Contact name="chourabi taher" email="tchourabi@gmail.com" />
         
        <Contact name="test taher" email="test@gmail.com" />
         
  
      </div> 
    );
  }
}
 
