import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    state = {
       username: '',
       password: ''
    }

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewUser = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/users', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                // console.log('props:', this.props)
                this.props.history.push('/jokes');
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Welcome!</h2>
                </div>
                <div>
                    <label htmlFor='username'/>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.inputChange}
                    />
                    <label htmlFor='password'/>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.inputChange}
                    />
                    <button onClick={this.addNewUser}>Continue</button>
                </div>
            </div>
        );
    }
}

export default SignUp;