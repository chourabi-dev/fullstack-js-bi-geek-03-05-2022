import React from "react";
import GameFeild from "./gameField";

export default class XoGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player : 1,
           
        }


        this.updatePlayer = this.updatePlayer.bind(this);
    }



    updatePlayer(){
        this.setState({
            player : this.state.player === 1 ? 2 : 1, 
        })  
    }   



    render(){
        return(
            
            <div>
                <p>
                    player: { this.state.player }
                </p>
                <div className="game">
             
               
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                <GameFeild updatePlayer = { this.updatePlayer } player={ this.state.player } /> 
                
               
                
            </div>
            </div>
        );
    }
}