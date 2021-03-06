import React from 'react';
import Login from './login';


const Authorized = (WrappedComponent) => {

    return class Logger extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                authourized: false
            };
        }

        handleLogin = () => {
            this.setState({ authorized: true});
        };

        render() {
            if(this.state.authorized) {
                return (
                    <WrappedComponent
                        { ...this.props }
                    />
                );
            }
            else {
                return (
                    <Login
                        onLogin = { this.handleLogin }
                    />
                );
            }
        }



    };

};

export default Authorized;
