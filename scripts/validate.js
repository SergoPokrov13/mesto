const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type-error',
};

const enableValidation = (config) => {
    const formPopup = document.querySelectorAll(config.formSelector);
    formPopup.forEach(form => {
        form.addEventListener('submit', (evt) =>
            evt.preventDefault());
        setListenerInput(form, config);
    })
}

const setListenerInput = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const popupBtnSubmit = form.querySelector(config.submitButtonSelector);

    inputList.forEach(function (inputEl) {
        inputEl.addEventListener('input', () => {
            handleInputValid(form, inputEl, config);
            toggleButtonForm(inputList, popupBtnSubmit, config);
        });
        addButton.addEventListener('click', () => {
            toggleButtonForm(inputList, popupBtnSubmit, config);
        });
    });
}

const handleInputValid = (form, inputEl, config) => {
    const errorEl = form.querySelector(`.error-${inputEl.id}`);
    if (inputEl.validity.valid) {
        inputEl.classList.remove(config.inputErrorClass);
        errorEl.textContent = '';
    } else {
        inputEl.classList.add(config.inputErrorClass);
        errorEl.textContent = inputEl.validationMessage;
    }

}

const hasInputElValid = (inputList) => {
    return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
    });
}

const toggleButtonForm = (inputList, popupBtnSubmit, config) => {
    const Inputs = hasInputElValid(inputList);

    if (Inputs) {
        disableButtonForm(popupBtnSubmit, config.inactiveButtonClass);

    } else {
        enableButtonForm(popupBtnSubmit, config.inactiveButtonClass);
    }
}

const enableButtonForm = (btn, buttonSelector) => {
    btn.classList.remove(buttonSelector);
    btn.disabled = false;
}

const disableButtonForm = (btn, buttonSelector) => {
    btn.classList.add(buttonSelector);
    btn.disabled = true;
}


enableValidation(config); 