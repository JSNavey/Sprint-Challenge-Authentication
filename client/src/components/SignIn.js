import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }

    submitForm = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state)
            .then(res => {
                console.log('token:', res.data.token)
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push('/jokes');
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Get Your Funny On!</h2>
                </div>
                <div>
                    <label htmlFor='username'/>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleInput}
                    />
                    <label htmlFor='password'/>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleInput}
                    />
                    <button onClick={this.submitForm}>Continue</button>
                </div>
            </div>
        );
    }
}

export default SignIn;