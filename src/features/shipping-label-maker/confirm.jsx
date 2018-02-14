import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import Button from '../../core/components/form-components/button';

import '../../core/components/wizard.css';

class Confirm extends React.Component {

    handleClick = (action) => {
        const { onAction } = this.props;
        onAction(action);
    }

    render() {
        const { wizardContext, title, isPreviousDisabled, isNextDisabled, prevAction, nextAction } = this.props;

        return (
            <div>
                <Header title = { title }/>
                <div className = 'wizard-confirm'>
                    <div>
                        <h4>Receiver&#39;s Address</h4>
                        <div>
                            <div>Name: { wizardContext.to.name }</div>
                            <div>Street: { wizardContext.to.street }</div>
                            <div>City: { wizardContext.to.city }</div>
                            <div>State: { wizardContext.to.state }</div>
                            <div>Zip: { wizardContext.to.zip }</div>
                        </div>
                    </div>
                    <div>
                        <h4>Sender&#39;s Address</h4>
                        <div>
                            <div>Name: { wizardContext.from.name }</div>
                            <div>Street: { wizardContext.from.street }</div>
                            <div>City: { wizardContext.from.city }</div>
                            <div>State: { wizardContext.from.state }</div>
                            <div>Zip: { wizardContext.from.zip }</div>
                        </div>
                    </div>
                    <div>
                        <h4>Package Weight</h4>
                        <div>
                            <div>Weight: { wizardContext.weight } lbs</div>
                        </div>
                    </div>
                    <div>
                        <h4>Shipping Option</h4>
                        <div>
                            <div>Shipping Option: { wizardContext.shippingOption }</div>
                        </div>
                    </div>
                </div>
                <Footer>
                    <Button
                        class = 'pull-left'
                        name = { prevAction }
                        title = 'Previous'
                        action = { prevAction }
                        isDisabled = { isPreviousDisabled }
                        onClick = { this.handleClick }
                    />
                    <Button
                        class = 'pull-right'
                        name = { nextAction }
                        title = 'Confirm'
                        action =  { nextAction }
                        isDisabled = { isNextDisabled }
                        onClick = { this.handleClick }
                    />
                </Footer>
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired,
        onAction: PropTypes.func.isRequired
    };

}

export default Confirm;
