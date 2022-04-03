import React from "react";

export default class GameFeild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            updateFN : props.updatePlayer,
            player: props.player
        }
    }





    render(){
        return(
            <div className="feild" style={ this.state.clicked === true ? { backgroundColor : this.state.player ===1 ? 'orange':'blue' } : {} } onClick={ ()=>{ 

                this.setState({
                    clicked : true
                })

                this.state.updateFN();

             } } >{ this.state.player }</div>
        );
    }
}