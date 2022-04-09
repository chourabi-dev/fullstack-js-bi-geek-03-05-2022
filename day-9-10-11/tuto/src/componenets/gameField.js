import React from "react";

export default class GameFeild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            updateFN : props.updatePlayer,
            player: props.player,
            lastplayerStatus : null
        }
    }





    render(){
        console.log(this.props.player);
        return(
            <div className="feild"
                style={  this.state. lastplayerStatus == null ? {} :  ( this.state. lastplayerStatus == 1 ? { backgroundColor: 'yellow' } : { backgroundColor:'blue' }  )  }
            
            
            onClick={ ()=>{ 

                this.setState({
                    clicked : true
                })

                if (this.state.clicked === false) {
                    this.setState({
                        lastplayerStatus: this.props.player
                    })
                    
                    this.state.updateFN();

                    
                }

             } } >{ this.state.lastplayerStatus }</div>
        );
    }
}