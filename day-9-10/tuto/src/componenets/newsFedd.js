import React from "react";

export default class NewsFeed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:props.id,
            nbrLikes: props.nbrLikes,
            title:props.title,
            like:false
        }
    } 

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={ ()=>{
                    this.setState({
                        nbrLikes: this.state.like === false ? (this.state.nbrLikes+1) : (this.state.nbrLikes-1),
                        like: ! this.state.like
                    })
                } } > {this.state.nbrLikes} { this.state.like=== false ? 'Like':'Dislike' }</button>
            </div>
        );
    }
}