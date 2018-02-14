import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import Button from '../../core/components/form-components/button';

import { isFormValid, isInputValid } from '../../core/utils/form-validation';

import '../../core/components/wizard.css';

class GetReceiverAddress extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            to: {
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
        const newState = Object.assign({}, this.state.to, wizardContext.to);
        this.setState({ to: newState });
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
        const { to } = this.state;
        const change = {};
        change[event.target.name] = event.target.value;
        const newObj = Object.assign({}, to, change);

        event.target.classList.add('active');
        isInputValid(event.target);
        this.setState({ to: newObj });
    }

    render() {
        const { to } = this.state;
        const { title, isPreviousDisabled, isNextDisabled, prevAction, nextAction } = this.props;

        return (
            <div>
                <Header title = { title }/>
                <div>
                    <div style = {{ 'marginBottom': '15px' }}>
                        <label name = 'nameLabel'>Name</label>
                        <input
                            type = 'text'
                            required
                            pattern = '^[a-zA-Z ]+$'
                            title = 'can only contain alphabets'
                            name = 'name'
                            className = 'form-control'
                            value = { to.name }
                            onChange = { this.onChange }
                        />
                        <div className = 'error' name = 'nameError' />
                    </div>
                    <div style = {{ 'marginBottom': '15px' }}>
                        <label name = 'streetLabel'>Street</label>
                        <input
                            type = 'text'
                            required
                            name = 'street'
                            className = 'form-control'
                            value = { to.street }
                            onChange = { this.onChange }
                        />
                        <div className = 'error' name = 'streetError' />
                    </div>
                    <div style = {{ 'paddingBottom': '100px' }}>
                        <div style = {{ 'float': 'left', 'padding': '0 15px 0 0', 'width': '33%' }}>
                            <label name = 'cityLabel'>City</label>
                            <input
                                type = 'text'
                                required
                                pattern = '^[a-zA-Z ]+$'
                                title = 'can only contain alphabets'
                                name = 'city'
                                className = 'form-control'
                                value = { to.city }
                                onChange = { this.onChange }
                            />
                            <div className = 'error' name = 'cityError' />
                        </div>
                        <div style = {{ 'float': 'left', 'padding': '0 15px 0 0', 'width': '33%' }}>
                            <label name = 'stateLabel'>State</label>
                            <select
                                required
                                name = 'state'
                                className = 'form-control'
                                value = { to.state }
                                onChange = { this.onChange }
                            >
                                <option value = ''> </option>
                                <option value = 'Alabama'>Alabama</option>
                                <option value = 'Alaska'>Alaska</option>
                                <option value = 'Arizona'>Arizona</option>
                                <option value = 'Arkansas'>Arkansas</option>
                                <option value = 'California'>California</option>
                                <option value = 'Colorado'>Colorado</option>
                                <option value = 'Connecticut'>Connecticut</option>
                                <option value = 'Delaware'>Delaware</option>
                                <option value = 'District of Columbia'>District of Columbia</option>
                                <option value = 'Florida'>Florida</option>
                                <option value = 'Georgia'>Georgia</option>
                                <option value = 'Guam'>Guam</option>
                                <option value = 'Hawaii'>Hawaii</option>
                                <option value = 'Idaho'>Idaho</option>
                                <option value = 'Illinois'>Illinois</option>
                                <option value = 'Indiana'>Indiana</option>
                                <option value = 'Iowa'>Iowa</option>
                                <option value = 'Kansas'>Kansas</option>
                                <option value = 'Kentucky'>Kentucky</option>
                                <option value = 'Louisiana'>Louisiana</option>
                                <option value = 'Maine'>Maine</option>
                                <option value = 'Maryland'>Maryland</option>
                                <option value = 'Massachusetts'>Massachusetts</option>
                                <option value = 'Michigan'>Michigan</option>
                                <option value = 'Minnesota'>Minnesota</option>
                                <option value = 'Mississippi'>Mississippi</option>
                                <option value = 'Missouri'>Missouri</option>
                                <option value = 'Montana'>Montana</option>
                                <option value = 'Nebraska'>Nebraska</option>
                                <option value = 'Nevada'>Nevada</option>
                                <option value = 'New Hampshire'>New Hampshire</option>
                                <option value = 'New Jersey'>New Jersey</option>
                                <option value = 'New Mexico'>New Mexico</option>
                                <option value = 'New York'>New York</option>
                                <option value = 'North Carolina'>North Carolina</option>
                                <option value = 'North Dakota'>North Dakota</option>
                                <option value = 'Northern Marianas Islands'>Northern Marianas Islands</option>
                                <option value = 'Ohio'>Ohio</option>
                                <option value = 'Oklahoma'>Oklahoma</option>
                                <option value = 'Oregon'>Oregon</option>
                                <option value = 'Pennsylvania'>Pennsylvania</option>
                                <option value = 'Puerto Rico'>Puerto Rico</option>
                                <option value = 'Rhode Island'>Rhode Island</option>
                                <option value = 'South Carolina'>South Carolina</option>
                                <option value = 'South Dakota'>South Dakota</option>
                                <option value = 'Tennessee'>Tennessee</option>
                                <option value = 'Texas'>Texas</option>
                                <option value = 'Uta'>Utah</option>
                                <option value = 'Vermont'>Vermont</option>
                                <option value = 'Virginia'>Virginia</option>
                                <option value = 'Virgin Islands'>Virgin Islands</option>
                                <option value = 'Washington'>Washington</option>
                                <option value = 'West Virginia'>West Virginia</option>
                                <option value = 'Wisconsin'>Wisconsin</option>
                                <option value = 'Wyoming'>Wyoming</option>
                            </select>
                            <div className = 'error' name = 'stateError' />
                        </div>
                        <div style = {{ 'float': 'left', 'padding': '0 0 0 0', 'width': '34%' }}>
                            <label name = 'zipLabel'>Zip</label>
                            <input
                                type = 'text'
                                required
                                pattern = '([0-9]){5}'
                                title = 'can only be 5 digits long'
                                name = 'zip'
                                className = 'form-control'
                                value = { to.zip }
                                onChange = { this.onChange }
                            />
                            <div className = 'error' name = 'zipError' />
                        </div>
                    </div>
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

export default GetReceiverAddress;
