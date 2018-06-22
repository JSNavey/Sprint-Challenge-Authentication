import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Jokes extends Component {
    state = {
        jokes: []
    }

    // componentDidMount() {
    //     const token = localStorage.getItem('jwt');
    //     const requestOptions = {
    //         headers: {
    //             Authorization: token
    //         }
    //     }

    //     axios
    //         .get('http://localhost:5000/api/jokes', requestOptions)
    //         .then(res => {
    //             this.setState({ jokes: res.data })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    signout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className='jokes-header'>When Dad Says...</h2>
                    <Link to='/' className='sign-out' onClick={this.signout}>Sign Out</Link>
                </div>
                {/* <div>
                    {this.state.jokes.map(joke => {
                        return (
                            <div>
                                <p>{joke.setup}</p>
                                <p>{joke.punchline}</p>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        );
    }
}

export default Jokes;