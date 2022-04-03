import React from 'react';
import './contact.css';

export default class Contact extends React.Component {

    constructor(props){
        super(props)

        console.log("constructor");
    }

    // when the com is visibile on the screen
    componentDidMount(){
        console.log("componentDidMount");
    }

    // a change in the "state"
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    // catch any type of error
    componentDidCatch(){
        console.log("componentDidCatch");
    }

    // comp will leave the screen
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
 


    render(){
        console.log(this.props);
        const isOld = this.props.isOld;


        return(
            <div className='card'>
               <div className="card-body">
                <h3 className='card-title'>{ this.props.name }
                
                {
                    isOld=== true ? <span>*</span> : <div></div>
                }
                
                </h3>
                <p className='card-text'>
                    <small>{ this.props.email }</small>
                </p>
               </div>
            </div>
        );
    }
    
}