import React from 'react';
import './wizard.css';

class Content extends React.Component {

    handleChange = (stepData) => {
        const { setStepData } = this.props;
        setStepData(stepData);
    };

    render() {
        const children = React.Children.map(this.props.children, child => {
            let StepComponent = child.type;
            return (
                <StepComponent { ...child.props } onDataChange = { this.handleChange }/>
            );
        });

        return (
            <div>
                { children }
            </div>
        );
    }
}

export default Content;
