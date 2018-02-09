import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';
import './progress-bar.css';

function ProgressBar(props) {
    const { progress, step } = props;
    return (
        <div>
            <h5 style = {{ 'textAlign': 'center' }}>STEP { step }</h5>
            <div className = 'progress'>
                <div className = 'progress-bar progress-bar-success' style = {{ 'width': progress+'%' }}>
                </div>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    step: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
};

export default ProgressBar;
