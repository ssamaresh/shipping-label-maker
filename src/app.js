import React, { Component } from 'react';
import './app.css';
import ShippingLabelMaker from './features/shipping-label-maker/shipping-label-maker';

class App extends Component {

    render() {
        return (
            <ShippingLabelMaker />
        );
    }
}

export default App;
