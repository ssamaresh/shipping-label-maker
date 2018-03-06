import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';

import './wizard.css';

// Importing sub classes for Step Component
import Header from './header';
import ProgressBar from './progress-bar';
import Content from './content';
import Footer from './footer';


class Step extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stepData: {}
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleClick = (name) => {
        const { onAction } = this.props;
        this.form.validateAll();
        onAction(name, this.state.stepData);
    };

    handleStepData = (stepData) => {
        this.setState({
            stepData: stepData
        });
    };

    render() {
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
            <Form onSubmit = { this.handleSubmit } ref = { c => this.form = c }>
                { children }
            </Form>
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
