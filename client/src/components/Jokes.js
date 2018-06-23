import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Jokes extends Component {
    state = {
        jokes: [{}]
    }

    componentWillMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }

        axios
            .get('http://localhost:5000/api/jokes', requestOptions)
            .then(res => {
                this.setState({ jokes: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    signout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className='jokes-header'>
                    <Link to='/' className='sign-out' onClick={this.signout}>Sign Out</Link>
                    <h2>When Dad Says...</h2>                    
                </div>
                <div>
                    {this.state.jokes.map((joke, index) => {
                        return (
                            <div key={joke.id + '' + index}>
                                <p>{joke.setup}</p>
                                <p>{joke.punchline}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Jokes;