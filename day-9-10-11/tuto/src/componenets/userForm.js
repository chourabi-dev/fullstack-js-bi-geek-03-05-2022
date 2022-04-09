import React from "react";


export default class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullname:'',
            fullnameTouched:false,

            country:'',
            countryTouched:false,

            type:'EMP',


            options:[
                { index :0, name:'hsrisa', selected : true },
                { index :1,name:'zitoun', selected : false },
                { index :2,name:'sauce', selected : false },
                { index :3,name:'jambon', selected : false }
            ]
        }
    }



    hundleTypeChange(val){

         this.setState({
            type : val
         })
    }



    render(){
        return(
            <div className="container">
                <form onSubmit={ (event)=>{ event.preventDefault();
                

                console.log(this.state);
                
                
                
                
                } } >

                    <div className="form-group mb-3">
                        <label htmlFor="">fullname</label>
                        <input type="text" className="form-control"  
                        
                        onChange={ (event)=>{
                            const val = event.target.value; 

                            this.setState({
                                fullname: val
                            })
                        } } 
                        onFocus={ ()=>{
                            this.setState({
                                fullnameTouched: true
                            })
                        } } 
                        value={ this.state.fullname } />

                        {
                            this.state.fullname === '' && this.state.fullnameTouched === true ?
                            <p>
                                <small className="text-danger">This feild is required</small>
                            </p>
                            :
                            null
                        }
                    </div>



                    <div className="form-group mb-3">
                        <label >country</label>
                        <select
                        
                        value={ this.state.country }

                        onChange={ (event)=>{
                            this.setState({
                                country: event.target.value
                            })
                        } }

                        onFocus={ ()=>{
                            this.setState({
                                countryTouched:true
                            })
                        } }
                        
                        className="form-control">
                            <option value="">Please choose your country</option>
                            <option value="TN">Tunisia</option>
                            <option value="usa">United state</option>
                        </select>


                        {
                                this.state.country === '' && this.state.countryTouched === true ?
                                <p>
                                    <small className="text-danger">This feild is required</small>
                                </p>
                                :
                                null
                        }

                    </div>


                    <div className="form-group">
                        <label >Type</label> <br />


                        <input type="radio"  
                        checked={ this.state.type=== 'EMP' ? true : false }   
                        onChange={(event)=>{  this.hundleTypeChange(event.target.value ) }}  
                        name="post" value={ 'EMP' } /> <label htmlFor="">Employee</label>



                        
                        <input type="radio"  checked={ this.state.type=== 'FREE' ? true : false }   onChange={(event)=>{  this.hundleTypeChange(event.target.value ) }}  name="post" value={ 'FREE' }/> <label htmlFor="">Freelance</label>
                        
                        <input type="radio"  checked={ this.state.type=== 'NOTH' ? true : false }   onChange={(event)=>{  this.hundleTypeChange(event.target.value ) }}   name="post" value={ 'NOTH' } /> <label htmlFor="">nothing</label>
                        
                    </div>


                    <hr/>


                    <h3>Choose you pizza ingridiants</h3>


                    <ul>
                        {
                            this.state.options.map((i)=>{
                                return <li key={i.index} >   <input onChange={ 
                                    
                                (event)=>{
                                    

                                    let newoptions = this.state.options;

                                    newoptions[i.index].selected = ! newoptions[i.index].selected

                                    this.setState({
                                        options: newoptions
                                    })


                                } } type="checkbox" checked={ i.selected } value={ i.name } /> <label htmlFor="">{i.name}</label>  </li>;
                            })
                        }
                    </ul>






                    <div className="form-group">
                        <button disabled={ 
                            this.state.fullname !== '' && this.state.country !== '' ? false : true


                         } type="submit" className="btn btn-success">SAVE</button>
                    </div>
                </form>
            </div>
        );
    }
}