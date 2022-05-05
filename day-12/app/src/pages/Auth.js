import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../componenets/Navbar";
 

export default class Authpage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        username:'',
        password:'',
        
    }



    
  }



  render(){
    return (
      <div>


          <form  onSubmit={ (e)=>{
              e.preventDefault();


              if ( this.state.username === 'admin' && this.state.password === 'admin' ) {

                const token = new Date().getTime();

                localStorage.setItem('token',token);

                this.props.history.push('/home');

              }else{
                  console.log("wrong username or password.");
              }



          } } >

            <div>
                <input type="text" placeholder="username" onChange={ (e)=>{
                    this.setState({
                        username: e.target.value
                    })
                } } />
            </div>

            <div>
                <input type="password" placeholder="password" onChange={ (e)=>{
                    this.setState({
                        password: e.target.value
                    })
                } }   />
            </div>

            <div>
                <button type="submit">connect</button>
            </div>

            


          </form>
 
      </div>
    );
  }
}

 