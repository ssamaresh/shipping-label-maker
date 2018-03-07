import React from 'react';
import PropTypes from 'prop-types';

import { isInputValid } from '../../utils/form-validation';

class InputNumber extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errorText: '',
            isValid: true
        };
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const { onFieldChanged } = this.props;
        const input = { name, value };
        onFieldChanged(input);
        this.checkInputValidity(e.target);
    };

    checkInputValidity = (input) => {
        const isValid = isInputValid(input);
        this.setState({
            errorText: isValid.errorText,
            isValid: isValid.valid
        });
    };

    render() {
        const { required, value, labelText, name, min, max, step } = this.props;
        const requiredClass = required ? 'required' : '';
        let inputClass = ['form-control'];

        return (
            <div className = { `form-group ${requiredClass}` }>
                <label name = { `${name} Label` }>{ labelText }</label>
                <input
                    required = { required }
                    type = 'number'
                    name = { name }
                    className = { inputClass.join(' ') }
                    value = { value }
                    min = { min }
                    max = { max }
                    step = { step }
                    onChange = { this.handleChange }
                />
                { !this.state.isValid
                    ?
                    <span className = 'form-error is-visible' name = 'nameError'>
                        { this.state.errorText }
                    </span>
                    :
                    null
                }
            </div>
        );
    }

    static defaultProps = {
        min: '0',
        max: '999',
        step: '1',
        required: false
    };

    static propTypes = {
        labelText: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onFieldChanged: PropTypes.func.isRequired,
        digits: PropTypes.number
    };
}

export default InputNumber;
