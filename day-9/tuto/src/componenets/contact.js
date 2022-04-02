import React from 'react';
import './contact.css';

export default class Contact extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <div className='card'>
               <div className="card-body">
                <h3 className='card-title'>{ this.props.name }</h3>
                <p className='card-text'>
                    <small>{ this.props.email }</small>
                </p>
               </div>
            </div>
        );
    }
    
}