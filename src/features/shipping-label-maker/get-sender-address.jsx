import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../../core/components/form-components/input-text';
import InputSelect from '../../core/components/form-components/input-select';
import { US_STATES } from '../../core/utils/utils';

import '../../core/components/wizard.css';

class GetSenderAddress extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            from: {
                name: '',
                street: '',
                city: '',
                state: '',
                zip: ''
            }
        };
    }

    componentWillMount() {
        const { wizardContext } = this.props;
        const newState = Object.assign({}, this.state.from, wizardContext.from);
        this.setState({ from: newState });
    }

    handleChange = (input) => {
        const { onDataChange } = this.props;
        this.setState({ from: {...this.state.from, [input.name]: input.value } },
            () => {
                onDataChange(this.state);
            });
    }

    render() {
        const { from } = this.state;
        return (
            <div>
                <InputText
                    required
                    labelText = 'Name'
                    name = 'name'
                    value = { from.name }
                    onFieldChanged = { this.handleChange }
                />
                <InputText
                    required
                    labelText = 'Street'
                    name = 'street'
                    value = { from.street }
                    onFieldChanged = { this.handleChange }
                />
                <div style = {{ 'display': 'flex', 'justifyContent': 'space-between' }}>
                    <InputText
                        required
                        labelText = 'City'
                        name = 'city'
                        value = { from.city }
                        onFieldChanged = { this.handleChange }
                    />
                    <InputSelect
                        required
                        labelText = 'State'
                        name = 'state'
                        value = { from.state }
                        options = { US_STATES }
                        onFieldChanged = { this.handleChange }
                    />
                    <InputText
                        required
                        labelText = 'Zip'
                        name = 'zip'
                        digits = { 5 }
                        value = { from.zip }
                        onFieldChanged = { this.handleChange }
                    />
                </div>
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired
    };

}

export default GetSenderAddress;
