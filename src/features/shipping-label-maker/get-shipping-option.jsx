import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import Button from '../../core/components/form-components/button';

import { isFormValid, isInputValid } from '../../core/utils/form-validation';

import '../../core/components/wizard.css';

class GetShippingOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shippingOption: ''
        };
    }

    componentWillMount() {
        const { wizardContext } = this.props;
        const newState = wizardContext.shippingOption;
        this.setState({ shippingOption: newState });
    }

    handleClick = (action) => {
        const { onAction } = this.props;
        const values = this.state;
        if(action === 'next' || action === 'end') {
            if(isFormValid()) {
                onAction(action, values);
            }
        }
        else {
            onAction(action, values);
        }
    }

    onChange = (event) => {
        isInputValid(event.target);
        this.setState({ shippingOption: event.target.value });
    }

    render() {
        const { shippingOption } = this.state;
        const { title, isPreviousDisabled, isNextDisabled, prevAction, nextAction } = this.props;

        return (
            <div>
                <Header title = { title }/>
                <div style = {{ 'marginBottom': '15px' }}>
                    <label hidden name = 'shippingOptionLabel'>Shipping Option</label>
                    <select
                        required
                        className = 'form-control'
                        value = { shippingOption }
                        name = 'shippingOption'
                        onChange = { this.onChange }
                    >
                        <option value = '1'>Ground</option>
                        <option value = '2'>Priority</option>
                    </select>
                    <div className = 'error' name = 'shippingOptionError' />
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
                        title = 'Next'
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

export default GetShippingOption;
