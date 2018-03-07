import React from 'react';
import './wizard.css';

const Content = props => {

    const children = React.Children.map(props.children, child => {
        let StepComponent = child.type;
        return (
            <StepComponent
                { ...child.props }
                onDataChange = { (stepData) => { props.setStepData(stepData); } }
            />
        );
    });

    return (
        <div>
            { children }
        </div>
    );
};

export default Content;
