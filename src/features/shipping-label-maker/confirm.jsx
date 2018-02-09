import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import '../../core/components/wizard.css';

class Confirm extends React.Component {

    handleClick = (action) => {
        const { onAction } = this.props;
        onAction(action);
    }

    render() {
        const { wizardContext, isPreviousDisabled, isNextDisabled, prevAction, nextAction, title } = this.props;
        const footerProps = {
            isPreviousDisabled,
            isNextDisabled,
            nextAction,
            prevAction
        };
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
                <Footer onBtnClick = { this.handleClick } { ...footerProps }/>
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired,
        onAction: PropTypes.func.isRequired
    };

}

export default Confirm;
