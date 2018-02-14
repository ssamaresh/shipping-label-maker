import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import Button from '../../core/components/form-components/button';

import { isFormValid, isInputValid } from '../../core/utils/form-validation';

import '../../core/components/wizard.css';

class GetWeight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: ''
        };
    }

    componentWillMount() {
        const { wizardContext } = this.props;
        const newState = wizardContext.weight;
        this.setState({ weight: newState });
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
            onAction(action);
        }
    }

    onChange = (event) => {
        const change = {};
        change[event.target.name] = event.target.value;
        event.target.classList.add('active');
        isInputValid(event.target);
        this.setState({ weight: event.target.value });
    }

    render() {
        const { weight } = this.state;
        const { title, isPreviousDisabled, isNextDisabled, prevAction, nextAction } = this.props;

        return (
            <div>
                <Header title = { title }/>
                <div style = {{ 'marginBottom': '15px' }}>
                    <label name = 'weightLabel'>Weight (lbs)</label>
                    <input
                        type = 'number'
                        required
                        name = 'weight'
                        min = '0.1'
                        max = '999'
                        step = '0.1'
                        pattern = '([0-9]){3}'
                        className = 'form-control'
                        value = { weight }
                        onChange = { this.onChange }
                    />
                    <div className = 'error' name = 'weightError' />
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

export default GetWeight;
