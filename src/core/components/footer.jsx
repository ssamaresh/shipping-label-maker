import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-validation/build/button';

//import Button from './form-components/button';

import './wizard.css';

class Footer extends React.Component {

    handleClick = (event) => {
        const { onClick } = this.props;
        if(onClick) {
            onClick(event.target.name);
        }
    };

    render() {
        const children = React.Children.map(this.props.children, child => {
            if(child.type === Button) {
                const className = `btn btn-primary ${child.props.className}`;
                return (
                    <Button { ...child.props } className = { className } onClick = { this.handleClick }>
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
    }

    static propTypes = {
        onClick: PropTypes.func
    };

}

Footer.Actions = {
    NEXT: 'next',
    PREV: 'prev'
};

export default Footer;
