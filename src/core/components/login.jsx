import React from 'react';

import InputText from '../components/form-components/input-text';
import Button from '../components/form-components/button';
import { isFormValid } from '../utils/form-validation';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validationErrors: []
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
        this.setState({
            validationErrors: isFormValid()
        },
        () => {
            if(this.state.validationErrors.length === 0) {
                if(!this.validateCredentials()) {
                    this.setState({
                        validationErrors: [{errorText: 'Wrong Username and/or password. Please try again!'}]
                    });
                }
                else {
                    onLogin();
                }
            }
        }
        );
    };

    render() {
        const { username, password, validationErrors } = this.state;

        return (
            <div className = 'wizard wizard-login-form'>
                {
                    validationErrors.length > 0 ?
                        validationErrors.map((error, index) => {
                            return <div key = { index } className = 'error' name = 'loginError'>{ error.errorText }</div>;
                        }) : null
                }
                <header className = 'step-header'>
                    Login
                </header>
                <div>
                    <InputText
                        required
                        labelText = 'Username'
                        name = 'username'
                        value = { username }
                        onFieldChanged = { this.handleChange }
                    />
                    <InputText
                        required
                        labelText = 'Password'
                        name = 'password'
                        pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                        title = 'must contain atleast one number, one lowercase, one uppercase letter, and atleast six characters'
                        value = { password }
                        onFieldChanged = { this.handleChange }
                    />
                    <footer>
                        <Button
                            className = 'center'
                            name = 'login'
                            title = 'Login'
                            isDisabled = { false }
                            onClick = { this.handleClick }
                        />
                    </footer>
                </div>
            </div>
        );
    }
}

export default Login;
