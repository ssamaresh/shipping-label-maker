import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-validation/build/select';

class InputSelect extends React.PureComponent {

    // componentDidMount() {
    //     const { value } = this.props;
    //     if(value !== this.state.value) {
    //         const newValue = value;
    //         this.setState({ value: newValue });
    //     }
    // }

    handleChange = (e) => {
        const { value, name } = e.target;
        const { onFieldChanged } = this.props;
        const input = { name, value };
        onFieldChanged(input);
    };

    render() {
        const { value, name, labelText, options, validations } = this.props;
        const requiredClass = validations.find(item => {
            return item.name === 'required';
        }) ? 'required' : '';
        let inputClass = ['form-control'];
        // const list = options.map((option, index) => {
        //     if (typeof option === 'object') {
        //         return <option key = { index } value = { option.value }>{ option.name }</option>;
        //     }
        //     else {
        //         return <option key = { index } value = { option }>{ option }</option>;
        //     }
        // });

        return (
            <div className = { `form-group ${requiredClass}` }>
                <label name = { `${name} Label` }>{ labelText }</label>
                <Select
                    name = { name }
                    value = { value }
                    className = { inputClass.join(' ') }
                    validations = { validations }
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
                </Select>
                {/* <select
                    //required = { required }
                    name = { name }
                    value = { value }
                    className = { inputClass.join(' ') }
                    onChange = { this.handleChange }
                    validations = { validations }
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
                </select> */}
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
