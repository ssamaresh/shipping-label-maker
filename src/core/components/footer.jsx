import React from 'react';
import PropTypes from 'prop-types';
import Button from './form-components/button';
import './wizard.css';

const Footer  = props => {

    const children = React.Children.map(props.children, child => {
        if(child.type === Button) {
            const className = `btn btn-primary ${child.props.className}`;
            return (
                <Button
                    { ...child.props }
                    className = { className }
                    onClick = { (name) => { props.onClick(name); } }
                >
                    { child.props.title }
                </Button>
            );
        }
    });

    return(
        <footer className = 'wizard-footer'>
            { children }
        </footer>
    );
};

Footer.propTypes = {
    onClick: PropTypes.func
};

export default Footer;
