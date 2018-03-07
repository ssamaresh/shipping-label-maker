import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {

    const { name, title, isDisabled, className } = props;
    
    return(
        <button
            className = { 'btn btn-primary ' + className }
            name = { name }
            disabled = { isDisabled }
            onClick = { (e) => {
                props.onClick(e.target.name);
            }}
        >
            { title }
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
};

export default Button;
