import React from 'react';

// Core Components import
import Wizard from '../../core/components/wizard';
import Authorized from '../../core/components/authorized';

// Steps import
import GetReceiverAddress from './get-receiver-address';
import GetSenderAddress from './get-sender-address';
import GetWeight from './get-weight';
import GetShippingOption from './get-shipping-option';
import Confirm from './confirm';
import ShippingLabel from './shipping-label';

// CSS import
import '../../core/components/wizard.css';

const AuthorizedWizard = Authorized(Wizard);

class ShippingLabelMaker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shippingInfo: {
                from: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                to: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                weight: '',
                shippingOption: '1'
            },
            isComplete: false
        };

        this.heading = 'Shipping Label Maker';
        this.ShippingOption = {
            ground: 1,
            priority: 2
        };
    }

    onComplete = () => {
        this.setState({ isComplete: true });
    }

    header = () => {
        return this.heading;
    }

    onWizardContextUpdate = (obj) => {
        const { shippingInfo } = this.state;
        const newShippingInfo = Object.assign({}, shippingInfo, obj);
        this.setState({ shippingInfo: newShippingInfo });
    }

    getTotalCost = () => {
        const { shippingInfo } = this.state;
        const shippingRate = 0.40;
        const shippingCost = shippingInfo.weight * shippingRate * (shippingInfo.shippingOption === this.ShippingOption.ground ? 1 : 1.5);
        return shippingCost.toFixed(2);
    }

    getShippingOption = () => {
        const { shippingInfo } = this.state;
        return Object.keys(this.ShippingOption).find(key => String(this.ShippingOption[key]) === shippingInfo.shippingOption);
    }

    render() {
        let { shippingInfo, isComplete } = this.state;
        const totalCost = this.getTotalCost();
        const steps = [
            {
                name: 'Enter Receiver\'s Address',
                component: GetReceiverAddress
            },
            {
                name: 'Enter Sender\'s Address',
                component: GetSenderAddress
            },
            {
                name: 'Enter Package Weight',
                component: GetWeight
            },
            {
                name: 'Enter Shipping Option',
                component: GetShippingOption
            },
            {
                name: 'Confirm Changes',
                component: Confirm
            }
        ];

        const wizardProps = {
            className: 'wizard',
            header: this.header,
            steps,
            wizardContext: shippingInfo,
            onComplete: this.onComplete,
            onWizardContextUpdate: this.onWizardContextUpdate
        };

        const shippingLabelProps = {
            className: 'wizard',
            wizardContext: shippingInfo,
            totalCost,
            shippingOption: this.getShippingOption()
        };

        return isComplete ?
            (
                <ShippingLabel { ...shippingLabelProps }></ShippingLabel>
            ) :
            (
                <AuthorizedWizard { ...wizardProps }></AuthorizedWizard>
            );
    }
}

export default ShippingLabelMaker;
