const formatName = (name) => {
    return name.slice(0, 1).toUpperCase().concat(name.slice(1));
};

export const isInputValid = (input) => {
    const validity = input.validity;
    let errorText = '';
    if (!validity.valid) {
        if (validity.valueMissing) {
            errorText = `${formatName(input.name)} is a required field`;
        }
        if(validity.patternMismatch) {
            errorText = `${formatName(input.name)} ${input.title}`;
        }
        if(validity.rangeOverflow) {
            errorText = `${formatName(input.name)} can only be upto ${input.max}`;
        }
        if(validity.stepMismatch) {
            errorText = `${formatName(input.name)} can only be incremented by ${input.step}`;
        }
        input.classList.add('is-invalid-input');
        return { valid: false, errorText };
    }
    input.classList.remove('is-invalid-input');
    return { valid: true, errorText};
};

export const isFormValid = () => {

    const formElements = [...document.querySelectorAll('.form-control')];
    let errorArr = [];

    formElements.forEach(input => {
        const result = isInputValid(input);
        if(!result.valid) {
            errorArr.push(result);
        }
    });

    return errorArr;
};
