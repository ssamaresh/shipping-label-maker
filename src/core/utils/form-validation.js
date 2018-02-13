

export const isInputValid = (input) => {
    const validity = input.validity;
    const label = document.getElementsByName(`${input.name}Label`)[0].textContent;
    const error = document.getElementsByName(`${input.name}Error`)[0];
    if (!validity.valid) {
        if (validity.valueMissing) {
            error.textContent = `${label} is a required field`;
        }
        if(validity.patternMismatch) {
            error.textContent = `${label} ` + input.title;
        }
        if(validity.rangeOverflow) {
            error.textContent = `${label} can only be upto ` + input.max + ' lbs';
        }
        if(validity.stepMismatch) {
            error.textContent = `${label} can only be incremented by ` + input.step + ' lbs';
        }
        return false;
    }
    error.textContent = '';
    return true;

};

export const isFormValid = () => {

    const formElements = [...document.querySelectorAll('.form-control')];
    const isFormValid = formElements.find(input => {
        input.classList.add('active');
        return isInputValid(input) === false;
    }) ? false : true;

    // formElements.forEach(input => {
    //     input.classList.add('active');
    //     const isValid = isInputValid(input);
    //     if (!isValid) {
    //         isFormValid = false;
    //     }
    // });
    return isFormValid;
};
