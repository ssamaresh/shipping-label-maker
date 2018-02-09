import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        const { onBtnClick, prevAction, nextAction } = this.props;
        const action = e.target.name === 'prevBtn' ? prevAction : nextAction;
        onBtnClick(action);
    }

    render() {
        const {
            isPreviousDisabled,
            isNextDisabled
        } = this.props;

        return(
            <footer className = 'wizard-footer'>
                <button
                    type = 'button'
                    className = 'btn btn-primary pull-left'
                    name = 'prevBtn'
                    disabled = { isPreviousDisabled }
                    onClick = { this.handleClick }
                >
                Previous
                </button>
                <button
                    type = 'button'
                    className = 'btn btn-primary pull-right'
                    name = 'nextBtn'
                    disabled = { isNextDisabled }
                    onClick = { this.handleClick }
                >
                Next
                </button>
            </footer>
        );
    }

    static propTypes = {
        onBtnClick: PropTypes.func.isRequired
    };

}

export default Footer;
