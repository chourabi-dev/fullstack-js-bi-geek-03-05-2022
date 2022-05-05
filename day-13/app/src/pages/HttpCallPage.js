import React from "react";

export default class HttpCallPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: '',
            data: []
        }
    }



    getData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        this.setState({
            isLoading: true
        })
        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                this.setState({
                    data: result
                })
            })
            .catch(error => {
                this.setState({
                    errorMessage: 'Something went wrong.'
                })
            }).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }


    componentDidMount() {
        this.getData();
    }



    render() {
        return (
            <div className="container">

                {
                    this.state.isLoading === true ?
                        <div className="text-center mt-5 mb-5">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        null
                }



                {
                    this.state.errorMessage !== '' ?
                        <div className="alert alert-danger mt-5 mb-5">
                            {this.state.errorMessage}. <span className="text-primary" onClick={()=>{
                                this.getData();
                            }}>try again</span>
                        </div>
                        :
                        null
                }






                <div className="card">
                    <div className="card-body">
                        <ul>
                            {
                                this.state.data.map((u) => {
                                    return (<li key={u.id}>
                                        <h3>{u.name}</h3>
                                        <p>
                                            <small className="text-muted">{u.email}</small>
                                        </p>
                                    </li>);
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>


        );


    }
}