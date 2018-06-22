import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    s
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
                        // value={this.state.username}
                        // onChange={this.handleInput}
                    />
                    <label htmlFor='password'/>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        // value={this.state.password}
                        // onChange={this.handleInput}
                    />
                    <button>Continue</button>
                </div>
            </div>
        );
    }
}

export default SignUp;