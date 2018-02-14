import React from 'react';

const Footer = props => {
    return(
        <footer className = 'wizard-footer'>
            { props.children }
        </footer>
    );
};

export default Footer;
