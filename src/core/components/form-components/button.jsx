import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    handleClick = (e) => {
        const { onClick } = this.props;
        onClick(e.target.name);
    }

    render() {
        const { name, title, isDisabled } = this.props;
        return(
            <button
                className = { 'btn btn-primary ' + this.props.class }
                name = { name }
                disabled = { isDisabled }
                onClick = { this.handleClick }
            >
                { title }
            </button>
        );
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool.isRequired
    };
}

export default Button;
