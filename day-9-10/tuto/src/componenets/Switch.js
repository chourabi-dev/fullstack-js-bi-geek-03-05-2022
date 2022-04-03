import React from "react";

export default class SwitchBtn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOn: false
        }
    } 
    render(){
        return (
            <div>
                <button   onClick={ ()=>{ 
                    // STATE POWER
                    this.setState( { isOn: ! this.state.isOn } ) 

                } }   > { this.state.isOn=== true ? 'Off' : 'ON' } </button>
            </div>
        );
    }
}