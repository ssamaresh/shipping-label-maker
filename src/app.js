import React, { Component } from 'react';
import './app.css';

import ShippingLabelMaker from './features/shipping-label-maker/shipping-label-maker';
import Authorized from './core/components/authorized';


class App extends Component {
    
    render() {
        const AuthorizedComponent = Authorized(ShippingLabelMaker);
        return (
            <AuthorizedComponent />
        );
    }
}

export default App;
