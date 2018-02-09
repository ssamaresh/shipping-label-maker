import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../core/components/footer';
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
        if(this.isFormValid()) {
            onAction(action, values);
        }
    }

    isFormValid() {
        const formElements = document.querySelectorAll('.form-control');
        let isFormValid = true;
        formElements.forEach(input => {
            input.classList.add('active');
            const isInputValid = this.showInputError(input);
            if (!isInputValid) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    showInputError = (input) => {
        const validity = input.validity;
        const label = document.getElementsByName(`${input.name}Label`)[0].textContent;
        const error = document.getElementsByName(`${input.name}Error`)[0];
        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            }
            else if(validity.patternMismatch) {
                error.textContent = `${label} ` + input.title;
            }
            else if(validity.rangeOverflow) {
                error.textContent = `${label} can only be upto ` + input.max + ' lbs';
            }
            return false;
        }
        error.textContent = '';
        return true;
    }

    onChange = (event) => {
        const change = {};
        change[event.target.name] = event.target.value;
        //const newObj = Object.assign({}, this.state, change);
        event.target.classList.add('active');
        this.showInputError(event.target);
        this.setState({ weight: event.target.value });
    }

    render() {
        const { weight } = this.state;
        const { isPreviousDisabled, isNextDisabled, prevAction, nextAction } = this.props;
        const footerProps = {
            isPreviousDisabled,
            isNextDisabled,
            nextAction,
            prevAction
        };
        return (
            <div>
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
                <Footer onBtnClick = { this.handleClick } { ...footerProps }/>
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired,
        onAction: PropTypes.func.isRequired
    };

}

export default GetWeight;
