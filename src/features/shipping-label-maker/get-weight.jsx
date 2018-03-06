import React from 'react';
import PropTypes from 'prop-types';

import InputNumber from '../../core/components/form-components/input-number';

import * as validation from '../../core/utils/form-validation';
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

    handleChange = (input) => {
        const { onDataChange } = this.props;
        this.setState({ weight: input.value },
            () => {
                onDataChange(this.state);
            });
    }

    render() {
        const { weight } = this.state;

        return (
            <div>
                <InputNumber
                    labelText = 'Weight (lbs)'
                    name = 'weight'
                    value = { weight }
                    onFieldChanged = { this.handleChange }
                    validations = { [
                        validation.required,
                        validation.rangeOverflow,
                        validation.stepMismatch]
                    }
                    min = '0.1'
                    max = '999'
                    step = '0.1'
                />
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired
    };

}

export default GetWeight;
