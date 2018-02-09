import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <header className = 'step-header'>
            { props.title }
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
