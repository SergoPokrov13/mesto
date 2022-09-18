class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._form = formElement;
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._btnSubmit = this._form.querySelector(this._config.submitButtonSelector);

    }

    _setListenerInputs() {
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._inputValid(input);
                this._toggleBtn();
            });
        });
    }

    _inputValid(input) {
        const inputErrorMessage = this._form.querySelector(`.error-${input.id}`);

        if (input.validity.valid) {
            input.classList.remove(this._config.inputErrorClass);
            inputErrorMessage.textContent = '';
        } else {
            input.classList.add(this._config.inputErrorClass);
            inputErrorMessage.textContent = input.validationMessage;
        }
    }

    _toggleBtn() {
        const stateInputs = this._inputsValid();

        if (stateInputs) {
            this.disableBtn();
        } else {
            this._enableBtn();
        }
    }

    _inputsValid() {
        return this._inputs.some(inputElement => {
            return !inputElement.validity.valid;
        });
    }

    _enableBtn() {
        this._btnSubmit.classList.remove(this._config.inactiveButtonClass);
        this._btnSubmit.disabled = false;
    }

    disableBtn() {
        this._btnSubmit.classList.add(this._config.inactiveButtonClass);
        this._btnSubmit.disabled = true;
    }

    enableValidation() {
        this._setListenerInputs();
    }
} 

export default FormValidator;