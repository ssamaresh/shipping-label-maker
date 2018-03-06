import React from 'react';
import Form from 'react-validation/build/form';

import InputText from '../components/form-components/input-text';
import Button from '../components/form-components/button';

import * as validation from '../../core/utils/form-validation';

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

    handleChange = (input) => {
        this.setState({
            [input.name]: input.value
        });
    };

    handleClick = () => {
        const { onLogin } = this.props;
        let error = document.getElementsByName('loginError')[0];
        this.form.validateAll();
        if(!this.validateCredentials()) {
            error.textContent = 'Wrong Username and/or password. Please try again!';
        }
        else {
            error.textContent = '';
            onLogin();
        }
    };

    render() {
        const { username, password } = this.state;
        return (
            <Form ref = { c => this.form = c } className = 'wizard wizard-login-form'>
                <div className = 'error' name = 'loginError' />
                <header className = 'step-header'>
                    Login
                </header>
                <div>
                    <InputText
                        labelText = 'Username'
                        name = 'username'
                        value = { username }
                        onFieldChanged = { this.handleChange }
                        validations = { [validation.required] }
                    />
                    <InputText
                        labelText = 'Password'
                        name = 'password'
                        //pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                        //title = 'must contain atleast one number, one lowercase, one uppercase letter, and atleast six characters'
                        value = { password }
                        validations = { [validation.required] }
                        onFieldChanged = { this.handleChange }
                    />
                    <footer>
                        <Button
                            class = 'center'
                            name = 'login'
                            title = 'Login'
                            action = 'login'
                            isDisabled = { false }
                            onClick = { this.handleClick }
                        />
                    </footer>
                </div>
            </Form>
        );
    }
}

export default Login;
