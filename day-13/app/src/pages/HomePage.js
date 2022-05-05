import React from "react";
import SideMenu from "../componenets/SideMenu";
import ToolBar from "../componenets/Toolbar";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : [
                { price:8000, title:"iPhone 13 pro max",  category:"Smart phone", photoURL:"https://bgr.com/wp-content/uploads/2021/04/iphone-13-design-schematic-3d-leak-1.jpg?quality=70&strip=all&w=834" },
                { price:5500, title:"PlayStation 5",  category:"Entertaimnet", photoURL:"https://akket.com/wp-content/uploads/2020/10/Sony-PlayStation-5-Pro-1.jpg" },
                { price:3000, title:"Samsung smart TV 50'",  category:"Smart phone", photoURL:"https://ksassets.timeincuk.net/wp/uploads/sites/54/2020/06/Samsung-TU8000.jpg" },
            ],


            display: 0,

            search:'',
            price: 10000
        }


        this.changeDisplay = this.changeDisplay.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.changePrice = this.changePrice.bind(this);
        
        
    }



    changeDisplay(){
        this.setState({
            display : this.state.display === 0 ? 1 : 0
        })
    }


    changeSearch(str){
        this.setState({
            search : str
        })
    }


    
    changePrice(price){
        this.setState({
            price : price
        })
    }


    render(){
        // style={ { backgroundImage : 'url(/imgs/bg.jpg)' } }
        return(
        <div className="container mt-5" >
            <div className="row">
                <div className="col-sm-4">
                    <SideMenu products={ this.state.products } changePrice= { this.changePrice } changeSearch = { this.changeSearch }  />
                </div>

                <div className="col-sm-8">
                    <ToolBar changeFN={ this.changeDisplay } />


                    <div className="products row">
                            
                            {
                                this.state.products.filter(p=>( p.title.toLowerCase().indexOf(this.state.search) != -1 ) && ( p.price<= this.state.price ) ).map((p)=>{

                                    if (this.state.display === 1) {

                                        return(
                                            <div class="col-md-12  mt-3">
                                                    <div class="row">
                                                    <div class="col-sm-6">
                                                        <img src={ p.photoURL } class="w-100" alt=""/>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <h3>{ p.title }</h3>
                                                        <p class="text-muted">{p.category}</p>
                                                        <p class="text-muted">{p.price}$</p>
                                                        
                                                    </div>
                                                    
                                                    </div>
                                                </div>
                                        );


                 
                                    } else {
                                        return(
                                            <div class="col-md-4  mt-3">
                                         
                                           
                                        <img src={ p.photoURL } class="w-100" alt="" />
                                     
                                    <div class="card-body">
                                       <h3>{p.title}</h3>
                                       <p class="text-muted">{p.category}</p>
                                       <p class="text-muted">{p.price}$</p>
                                       
                                    </div>
                                    
                                  
                             </div>
                                        );
                                    }
                                 
                                })
                            }

                    </div>


                </div>

            </div>
        </div>
        
        
        ); 
               
         
    }
}