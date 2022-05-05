import React from "react";
import NavBar from "../componenets/Navbar";
 

export default class ProductDetails extends React.Component{
  constructor(props){
    super(props)



    console.log(props);
    


    this.state = {
        id: props.match.params.id,
        name: props.match.params.name,

        
      }


    let search = props.location.search;

    console.log(search.split('?')[1].split('&')[1].split('=')[1]);

  }



  render(){
    return (
      <div>
          <NavBar/>

          <h1>Trying to get product details N° {  this.state.name } </h1>
      </div>
    );
  }
}

 