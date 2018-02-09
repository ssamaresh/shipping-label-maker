import React from 'react';
import PropTypes from 'prop-types';
import '../../core/components/wizard.css';

const ShippingLabel = props => {

    const { wizardContext, totalCost, shippingOption, className } = props;
    return (
        <div
            className = { className }
            style = {{ 'border': '2px solid #000000' }}
        >
            <header style = {{ 'padding': '10px 15px' }}>
                <h3>Shipping Label</h3>
            </header>
            <div>
                <div style = {{ 'padding': '10px 15px' }}>
                    <h4>Receiver&#39;s Address</h4>
                    <div>
                        <div>Name: { wizardContext.to.name }</div>
                        <div>Street: { wizardContext.to.street }</div>
                        <div>City: { wizardContext.to.city }</div>
                        <div>State: { wizardContext.to.state }</div>
                        <div>Zip: { wizardContext.to.zip }</div>
                    </div>
                </div>
                <div style = {{ 'padding': '10px 15px' }}>
                    <h4>Sender&#39;s Address</h4>
                    <div>
                        <div>Name: { wizardContext.from.name }</div>
                        <div>Street: { wizardContext.from.street }</div>
                        <div>City: { wizardContext.from.city }</div>
                        <div>State: { wizardContext.from.state }</div>
                        <div>Zip: { wizardContext.from.zip }</div>
                    </div>
                </div>
                <div style = {{ 'padding': '10px 15px' }} >
                    <h4>Package Weight</h4>
                    <div>
                        <div>Weight: { wizardContext.weight } lbs</div>
                    </div>
                </div>
                <div style = {{ 'padding': '10px 15px' }}>
                    <h4>Shipping Option</h4>
                    <div>
                        <div>Shipping Option: { shippingOption }</div>
                    </div>
                </div>
                <div style = {{ 'padding': '10px 15px' }} >
                    <h4>Total Cost</h4>
                    <span>$ { totalCost }</span>
                </div>
            </div>
        </div>
    );
};

ShippingLabel.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    totalCost: PropTypes.string.isRequired,
    shippingOption: PropTypes.string.isRequired
};

export default ShippingLabel;
