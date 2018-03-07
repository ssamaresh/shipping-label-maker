import React from 'react';
import PropTypes from 'prop-types';

import { isInputValid } from '../../utils/form-validation';

class InputSelect extends React.PureComponent {

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
        const { required, value, labelText, name, title, options, pattern } = this.props;
        const requiredClass = required ? 'required' : '';
        let inputClass = ['form-control'];

        return (
            <div className = { `form-group ${requiredClass}` }>
                <label name = { `${name} Label` }>{ labelText }</label>
                <select
                    required = { required }
                    name = { name }
                    pattern = { pattern }
                    title = { title }
                    value = { value }
                    className = { inputClass.join(' ') }
                    onChange = { this.handleChange }
                >
                    {
                        options.map((option, index) => {
                            if (typeof option === 'object') {
                                return <option key = { index } value = { option.value }>{ option.name }</option>;
                            }
                            else {
                                return <option key = { index } value = { option }>{ option }</option>;
                            }
                        })
                    }
                </select>
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

    static propTypes = {
        labelText: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onFieldChanged: PropTypes.func.isRequired
    };
}

export default InputSelect;
