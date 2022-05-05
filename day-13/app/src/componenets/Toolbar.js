import React from "react";

export default class ToolBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display : 0,
            changeFN: props.changeFN
        }
    }




    render(){
        return(
        <div className="card">
            <div className="card-body">
                  <div className="d-flex">


                        <div onClick={()=>{ this.setState({display:0}); this.state.changeFN(); }} className= { this.state.display === 0 ? "toolbar-option active" : "toolbar-option" } >
                            <i class="fa fa-th" aria-hidden="true"></i>
                        </div>


                        <div onClick={()=>{ this.setState({display:1});this.state.changeFN(); }} className={ this.state.display === 1 ? "toolbar-option active" : "toolbar-option" }>
                            <i class="fa fa-list" aria-hidden="true"></i>
                        </div>

                  </div>
            </div>
            
            
        </div>
        
        
        ); 
               
         
    }
}