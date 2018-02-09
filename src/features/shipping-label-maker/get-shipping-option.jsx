import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../core/components/footer';
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

    handleClick = (action) => {
        const { onAction } = this.props;
        const values = this.state;
        onAction(action, values);
    }

    onChange = (event) => {
        const change = {};
        change[event.target.name] = event.target.value;
        // const newObj = Object.assign({}, shippingOption, change);
        this.setState({ shippingOption: event.target.value });
    }

    render() {
        const { shippingOption } = this.state;
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
                    <select
                        required
                        className = 'form-control'
                        value = { shippingOption }
                        name = 'shippingOption'
                        onChange = { this.onChange }
                    >
                        <option value = '1'>Ground</option>
                        <option value = '2'>Priority</option>
                    </select>
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

export default GetShippingOption;
