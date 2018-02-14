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

        onLogin = () => {
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
                        authorized = { this.state.authorized }
                        onLogin = { this.onLogin }
                    />
                );
            }
        }



    };

};

export default Authorized;
