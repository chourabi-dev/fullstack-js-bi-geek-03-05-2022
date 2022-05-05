import React from "react";

export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            changeSearch: props.changeSearch,
            changePrice: props.changePrice,
             
            chosenPrice : null,
            products:props.products
        }
    }


    getMaxPrice(){
 
        let max = 0;

        this.state.products.map((p)=>{
            if (p.price > max) {
                max = p.price;
                
            }
        })

        return max;
    }




    render(){
        return(
        <div className="card">
            <div className="card-body">
                <div className="form-group mb-3">
                    <label htmlFor="">Search</label>
                    <input onChange={(e)=>{
                        const val = e.target.value;

                        this.state.changeSearch(val);



                    }} type="text" className="form-control" />
                </div>
                

                <div className="form-group mb-3">
                    <label htmlFor="">Price   { this.state.chosenPrice === null ? '-- --' : this.state.chosenPrice+'$' }   </label>
                    <input type="range" className="w-100" onChange={ (e)=>{
                        const percent = Number(e.target.value);

                        console.log(percent);

                        let result = (this.getMaxPrice() * percent  / 100 );

                        this.state.changePrice(result);

                        this.setState({
                            chosenPrice: result
                        })



                    } }  />
                </div>
                

            </div>
            
            
        </div>
        
        
        ); 
               
         
    }
}