import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-validation/build/input';

class InputNumber extends React.Component {

    // componentWillMount() {
    //     const { value } = this.props;
    //     const newValue = value;
    //     this.setState({ value: newValue });
    // }
    
    handleChange = (e) => {
        const { value, name } = e.target;
        const { onFieldChanged } = this.props;
        const input = { name, value };
        onFieldChanged(input);
        // this.setState({
        //     value: value
        // }, () => { this.handleStateChange(); });
    };

    render() {
        const { value, digits, labelText, name, validations, min, max, step } = this.props;
        const requiredClass = validations.find(item => {
            return item.name === 'required';
        }) ? 'required' : '';
        let inputClass = ['form-control'];

        return (
            <div className = { `form-group ${requiredClass}` }>
                <label name = { `${name} Label` }>{ labelText }</label>
                <Input
                    type = 'number'
                    name = { name }
                    className = { inputClass.join(' ') }
                    value = { value }
                    digits = { digits }
                    min = { min }
                    max = { max }
                    step = { step }
                    onChange = { this.handleChange }
                    validations = { validations }
                />
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
