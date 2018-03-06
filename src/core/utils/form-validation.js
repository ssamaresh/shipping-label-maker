import React from 'react';
import validator from 'validator';

const getFormattedName = name => {
    return name.slice(0, 1).toUpperCase().concat(name.slice(1));
};

export const required = (value, props) => {
    const { name } = props;
    if(name && value === '') {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} is a required field` }</span>;
    }
};

export const alphabetsOnly = (value, props) => {
    const { name } = props;
    const regex = RegExp(/^[a-zA-Z ]+$/);
    if(!regex.test(value)) {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} can only contain alphabets` }</span>;
    }
};

export const digitsOnly = (value, props) => {
    const { name } = props;
    const regex = RegExp(/([0-9])/);
    if(!regex.test(value)) {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} can only contain digits` }</span>;
    }
};

export const numDigits = (value, props) => {
    const { name, digits } = props;
    const pattern = `^[0-9]{${digits}}$`;
    const regex = RegExp(pattern);
    if(!regex.test(value)) {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} can only contain ${digits} digits` }</span>;
    }
};

export const rangeOverflow = (value, props) => {
    const { name, max } = props;
    if(value > max) {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} can only be upto ${max}` }</span>;
    }
};

export const stepMismatch = (value, props) => {
    const { name, step } = props;
    if(value % step !== 0) {
        return <span className = 'form-error is-visible'>{ `${getFormattedName(name)} can only be incremented by ${step}` }</span>;
    }
};

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`;
    }
};

export const isInputValid = (labelText, input) => {
    const validity = input.validity;
    const label = labelText;
    let errorText = '';
    if (!validity.valid) {
        if (validity.valueMissing) {
            errorText = `${label} is a required field`;
        }
        if(validity.patternMismatch) {
            errorText = `${label} ` + input.title;
        }
        if(validity.rangeOverflow) {
            errorText = `${label} can only be upto ` + input.max + ' lbs';
        }
        if(validity.stepMismatch) {
            errorText = `${label} can only be incremented by ` + input.step + ' lbs';
        }
        return { valid: false, errorText };
    }
    return { valid: true, errorText};
};
