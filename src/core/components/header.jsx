import React from 'react';

function Header (props) {
    return (
        <header className = 'step-header'>
            { props.title }
        </header>
    );
}

export default Header;
