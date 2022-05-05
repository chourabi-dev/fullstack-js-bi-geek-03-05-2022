import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }




    render(){
        return(
        <div className="card">
            <div className="card-body">
                <h1>404 NOT FOUND</h1>

                <p className="text-center">
                    <Link to="/app">back to home</Link>
                </p>
            </div>
            
            
        </div>
        
        
        ); 
               
         
    }
}