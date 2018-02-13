import React from 'react';
import PropTypes from 'prop-types';
import Button from './form-components/button';


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (action) => {
        const { onBtnClick } = this.props;
        onBtnClick(action);
    }

    render() {
        const {
            isPreviousDisabled,
            isNextDisabled,
            prevAction,
            nextAction
        } = this.props;

        return(
            <footer className = 'wizard-footer'>
                <Button
                    class = 'pull-left'
                    name = { prevAction }
                    title = 'Previous'
                    action = { prevAction }
                    disabled = { isPreviousDisabled }
                    onClick = { this.handleClick }
                />
                <Button
                    class = 'pull-right'
                    name = { nextAction }
                    title = 'Next'
                    action = { nextAction }
                    disabled = { isNextDisabled }
                    onClick = { this.handleClick }
                />
            </footer>
        );
    }

    static propTypes = {
        onBtnClick: PropTypes.func.isRequired
    };

}

export default Footer;
