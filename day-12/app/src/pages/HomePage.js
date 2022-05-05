import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../componenets/Navbar";
 

export default class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        products : [
            { id:1, name:"Samsung TV" },
            { id:2, name:"HP pavillion" },
            
        ]
    }



    
  }


  componentDidMount(){
      if (localStorage.getItem('token')) {
          // call the server and check the valisity of the token
          
      }else{
          this.props.history.push('/auth');
      }
  }


  render(){
    return (
      <div>

          <NavBar/>
          <h1>Home page works !</h1>


          <hr />


          <h3>Products list</h3>

          <ul>
              {
                  this.state.products.map((p)=>{
                      return (

                        <li key={ p.id }> <Link to={ '/produit/'+p.id+'/'+p.name } >{ p.name }</Link> </li>
                      );
                  })
              }
          </ul>
      </div>
    );
  }
}

 