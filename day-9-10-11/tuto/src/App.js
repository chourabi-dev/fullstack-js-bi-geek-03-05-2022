import React from 'react';
import './App.css';
import Contact from './componenets/contact';
import XoGame from './componenets/game';
import NewsFeed from './componenets/newsFedd';
import SwitchBtn from './componenets/Switch';
import UserForm from './componenets/userForm';

export default  class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      news : [
        { title:"this is a title", nbrLikes: 80, id:1 },
        { title:"React js is simple", nbrLikes: 0, id:2 },
        
      ]
    }
  }


  render(){
    const element = <h1>welcome to react</h1>;
    return (
      <div className="App">
        { element }
  
        {
          /**
           *         <h3>welcome to our app</h3>
  
        <hr />
         
  
        <Contact isOld={ true } name="chourabi taher" email="tchourabi@gmail.com" />
         
        <Contact isOld={ false } name="test taher" email="test@gmail.com" />
         

         <SwitchBtn />
           */
        }




        {
          /**
           * this.state.news.map((n)=>{
            return(<NewsFeed key={ n.id } title={ n.title } nbrLikes={ n.nbrLikes } id={ n.id }   />);
          })
           */
        }


        {
          /**
           *  <XoGame />
           */
        }



       {
         /**
          * FORMS
          */
       }
        


        <UserForm />

       


   
      </div> 
    );
  }
}
 
