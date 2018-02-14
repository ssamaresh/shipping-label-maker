import React from 'react';
//import PropTypes from 'prop-types';
import Button from './form-components/button';
import { isFormValid, isInputValid } from '../utils/form-validation';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    validateCredentials = () => {
        const { username, password } = this.state;
        return username === 'User123' && password === 'User123';
    };

    onChange = (event) => {
        event.target.classList.add('active');
        isInputValid(event.target);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick = () => {
        const { onLogin } = this.props;
        if(isFormValid() && this.validateCredentials()) {
            onLogin();
        }
        else {
            const error = document.getElementsByName('loginError')[0];
            error.textContent = 'Invalid Username and/or password. Please try again!';
        }
    };

    render() {
        const { username, password } = this.state;
        return (
            <div className = 'wizard wizard-login-form'>
                <div className = 'error' name = 'loginError' />
                <header className = 'step-header'>
                    Login
                </header>
                <div>
                    <div style = {{ 'marginBottom': '15px' }}>
                        <label name = 'usernameLabel'>Username</label>
                        <input
                            type = 'text'
                            required
                            name = 'username'
                            className = 'form-control'
                            value = { username }
                            onChange = { this.onChange }
                        />
                        <div className = 'error' name = 'usernameError' />
                    </div>
                    <div style = {{ 'marginBottom': '15px' }}>
                        <label name = 'passwordLabel'>Password</label>
                        <input
                            type = 'password'
                            required
                            pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                            title = 'must contain atleast one number, one lowercase, one uppercase letter, and atleast six characters'
                            name = 'password'
                            className = 'form-control'
                            value = { password }
                            onChange = { this.onChange }
                        />
                        <div className = 'error' name = 'passwordError' />
                    </div>
                </div>
                <footer className = 'wizard-footer'>
                    <Button
                        class = 'center'
                        name = 'login'
                        title = 'Login'
                        action = 'login'
                        disabled = { false }
                        onClick = { this.handleClick }
                    />
                </footer>
            </div>
        );
    }

}

export default Login;
