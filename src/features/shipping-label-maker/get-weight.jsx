import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../core/components/header';
import Footer from '../../core/components/footer';
import { isFormValid, isInputValid } from '../../core/utils/form-validation';
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
        const change = {};
        change[event.target.name] = event.target.value;
        event.target.classList.add('active');
        isInputValid(event.target);
        this.setState({ weight: event.target.value });
    }

    render() {
        const { weight } = this.state;
        const { title, footerProps } = this.props;

        return (
            <div>
                <Header title = { title }/>
                <div style = {{ 'marginBottom': '15px' }}>
                    <label name = 'weightLabel'>Weight (lbs)</label>
                    <input
                        type = 'number'
                        required
                        name = 'weight'
                        min = '0.1'
                        max = '999'
                        step = '0.1'
                        pattern = '([0-9]){3}'
                        className = 'form-control'
                        value = { weight }
                        onChange = { this.onChange }
                    />
                    <div className = 'error' name = 'weightError' />
                </div>
                <Footer
                    onBtnClick = { this.handleClick }
                    footerProps = { footerProps }
                />
            </div>
        );
    }

    static propTypes = {
        wizardContext: PropTypes.object.isRequired,
        onAction: PropTypes.func.isRequired
    };

}

export default GetWeight;
