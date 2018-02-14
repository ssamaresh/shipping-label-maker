import React from 'react';
import PropTypes from 'prop-types';
import Button from './form-components/button';


class Footer extends React.Component {

    handleClick = (action) => {
        const { onBtnClick } = this.props;
        onBtnClick(action);
    }

    render() {
        const { footerProps } = this.props;
        const buttons = footerProps.buttons.map((button, index) => {
            return (
                <Button
                    key = { index }
                    class = { button.class }
                    name = { button.name }
                    title = { button.title }
                    action = { button.action }
                    disabled = { button.isDisabled }
                    onClick = { this.handleClick }
                />
            );
        });


        return(
            <footer className = 'wizard-footer'>
                { buttons }
            </footer>
        );
    }

    static propTypes = {
        onBtnClick: PropTypes.func.isRequired,
        footerProps: PropTypes.object.isRequired
    };

}

export default Footer;
