import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './progress-bar';
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

    getStep = (step, wizardContext) => {
        const { steps } = this.props;

        const isPreviousDisabled = step === 1 ? true : false;
        const isNextDisabled = false;
        const nextAction = step !== steps.length ? 'next' : 'end';
        const prevAction = 'prev';

        const StepComponent = steps[step - 1]['component'];

        const title = steps[step - 1]['name'];

        const footerProps = {
            isPreviousDisabled,
            isNextDisabled,
            nextAction,
            prevAction
        };

        return (
            <div>
                <header className = 'step-header'>
                    { title }
                </header>
                <StepComponent
                    wizardContext = { wizardContext }
                    onAction = {this.onAction }
                    {...footerProps}
                />
            </div>
        );
    }

    wizardContextUpdate = (obj) => {
        const { onWizardContextUpdate } = this.props;
        onWizardContextUpdate(obj);
    }

    onAction = (action, values) => {
        const actionValue = this.WizardAction[action];
        const { onComplete } = this.props;
        const { step } = this.state;

        this.wizardContextUpdate(values);

        switch(actionValue) {
            case 1:
                this.setState({ step: step - 1});
                break;
            case 2:
                this.setState({ step: step + 1});
                break;
            case 3:
                onComplete();
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
                <ProgressBar
                    progress = { progress }
                    step = { step }
                ></ProgressBar>
                <div className = 'wizard-step'>{ this.getStep(step, wizardContext) }</div>
            </div>
        );
    }
}

export default Wizard;
