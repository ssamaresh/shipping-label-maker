import React from 'react';
import PropTypes from 'prop-types';
//import Button from 'react-validation/build/button';

import Button from './form-components/button';
import Step from './step';

import './wizard.css';

class Wizard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };

        this.WizardAction = {
            prev: 1,
            next: 2,
            end: 3
        };
    }

    static propTypes = {
        header: PropTypes.func.isRequired,
        steps: PropTypes.array.isRequired,
        wizardContext: PropTypes.object.isRequired,
        onComplete: PropTypes.func.isRequired
    };

    renderStep = (step, wizardContext, progress) => {
        const { steps } = this.props;

        // Props for Header Component
        const title = steps[step - 1]['name'];
        const headerProps = {
            title
        };

        const progressBarProps = {
            progress,
            step
        };

        const StepComponent = steps[step - 1]['component'];

        // Props for Footer Component
        const isPreviousDisabled = step === 1 ? true : false;
        const isNextDisabled = false;
        const nextAction = step !== steps.length ? 'next' : 'end';
        const prevAction = 'prev';

        return (
            <Step onAction = { this.handleOnAction }>
                <Step.Header { ...headerProps } />
                <Step.ProgressBar { ...progressBarProps } />
                <Step.Content>
                    <StepComponent wizardContext = { wizardContext }/>
                </Step.Content>
                <Step.Footer>
                    <Button
                        className = 'pull-left'
                        name = { prevAction }
                        title = 'Previous'
                        action = { prevAction }
                        isDisabled = { isPreviousDisabled }
                        onClick = { this.handleClick }
                    />
                    <Button
                        className = 'pull-right'
                        name = { nextAction }
                        title = 'Next'
                        action =  { nextAction }
                        isDisabled = { isNextDisabled }
                        onClick = { this.handleClick }
                    />
                </Step.Footer>
            </Step>
        );
    }

    wizardContextUpdate = (obj) => {
        const { onWizardContextUpdate } = this.props;
        onWizardContextUpdate(obj);
    }

    handleOnAction = (action, values = {}) => {
        const actionValue = this.WizardAction[action];
        const { onComplete } = this.props;
        const { step } = this.state;

        switch(actionValue) {
            case 1:
                this.wizardContextUpdate(values);
                this.setState({ step: step - 1});
                break;
            case 2:
                this.wizardContextUpdate(values);
                this.setState({ step: step + 1});
                break;
            case 3:
                this.wizardContextUpdate(values);
                onComplete();
                break;
            default:
                return true;
        }
    }

    render() {
        const { className, wizardContext, header, steps } = this.props;
        const { step } = this.state;
        const length = steps.length;
        const progress = (step/length) * 100;
        return (
            <div className = { className }>
                <header className = 'wizard-header'>
                    <h2>{ header() }</h2>
                </header>
                { this.renderStep(step, wizardContext, progress) }
            </div>
        );
    }
}

export default Wizard;
