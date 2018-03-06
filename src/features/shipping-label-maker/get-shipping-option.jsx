import React from 'react';
import PropTypes from 'prop-types';

import InputSelect from '../../core/components/form-components/input-select';

import Textarea from 'react-validation/build/textarea';
import Select from 'react-validation/build/select';

import { SHIPPING_OPTIONS } from '../../core/utils/utils';

import * as validation from '../../core/utils/form-validation';
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

    handleChange = (input) => {
        const { onDataChange } = this.props;
        this.setState({ shippingOption: input.value },
            () => {
                onDataChange(this.state);
            });
    }

    render() {
        const { shippingOption } = this.state;
        return (
            <div>
                <InputSelect
                    labelText = 'Shipping Option'
                    name = 'shippingOption'
                    value = { shippingOption }
                    options = { SHIPPING_OPTIONS }
                    onFieldChanged = { this.handleChange }
                    validations={[validation.required]}
                />
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired
    };

}

export default GetShippingOption;
