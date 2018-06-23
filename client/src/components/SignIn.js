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
                <div className='header'>
                    <h1>Get Your Funny On!</h1>
                </div>
                <div className='container'>
                    <div className='form'>
                        <label htmlFor='username'/>
                        <input className='input-box'
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleInput}
                        />
                        <label htmlFor='password'/>
                        <input className='input-box'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleInput}
                        />
                        <button className='btn' onClick={this.submitForm}>Continue</button>
                    </div>
                    <p>Do you have an account?</p>
                    <Link to='/register'>Sign Up Here!</Link>     
                </div>
            </div>
        );
    }
}

export default SignIn;