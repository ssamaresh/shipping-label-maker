import React from 'react';
import PropTypes from 'prop-types';

import './wizard.css';

// Importing sub classes for Step Component
import Header from './header';
import ProgressBar from './progress-bar';
import Content from './content';
import Footer from './footer';

import { isFormValid } from '../utils/form-validation';

class Step extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stepData: {},
            validationErrors: []
        };
    }

    handleClick = (name) => {
        const { onAction } = this.props;
        this.setState({
            validationErrors: isFormValid()
        },
        () => {
            if(this.state.validationErrors.length === 0) {
                onAction(name, this.state.stepData);
            }
        }
        );
    };

    handleStepData = (stepData) => {
        this.setState({
            stepData: stepData,
            validationErrors: []
        });
    };

    render() {
        const { validationErrors } = this.state;
        const children = React.Children.map(this.props.children, child => {
            if(child.type === Header) {
                return <Header { ...child.props } />;
            }
            if(child.type === ProgressBar) {
                return <ProgressBar { ...child.props } />;
            }
            if(child.type === Content) {
                return <Content { ...child.props } setStepData = { this.handleStepData }/>;
            }
            if(child.type === Footer) {
                return <Footer { ...child.props } onClick = { this.handleClick } />;
            }
            return child;
        });
        return (
            <div>
                {
                    validationErrors.length > 0 ?
                        validationErrors.map((error, index) => {
                            return <div key = { index } className = 'error'>{ error.errorText }</div>;
                        }) : null
                }
                { children }
            </div>
        );
    }

    static propTypes = {
        onAction: PropTypes.func.isRequired
    };

}

Step.Header = Header;
Step.ProgressBar = ProgressBar;
Step.Content = Content;
Step.Footer = Footer;

export default Step;
