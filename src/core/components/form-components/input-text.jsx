import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-validation/build/input';

class InputText extends React.Component {

    handleChange = (e) => {
        const { value, name } = e.target;
        const { onFieldChanged } = this.props;
        const input = { name, value };
        onFieldChanged(input);
    };

    render() {
        const { value, labelText, name, validations, digits } = this.props;
        const requiredClass = validations.find(item => {
            return item.name === 'required';
        }) ? 'required' : '';
        let inputClass = ['form-control'];

        return (
            <div className = { `form-group ${requiredClass}` }>
                <label name = { `${name} Label` }>{ labelText }</label>
                <Input
                    type = 'text'
                    digits = { digits }
                    name = { name }
                    className = { inputClass.join(' ') }
                    value = { value }
                    onChange = { this.handleChange }
                    validations = { validations }
                />
            </div>
        );
    }

    static defaultProps = {
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

export default InputText;
