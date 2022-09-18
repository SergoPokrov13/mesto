import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = submitForm;
        this._inputs = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        const data = {};
        this._inputs.forEach(input => {
            data[input.name] = input.value;
        });
        return data;
    }

    setInputValue({ name, job }) {
        this._inputs[0].value = name;
        this._inputs[1].value = job;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const dataInputs = this._getInputValues();
            this._submitForm(dataInputs);
            this.close();
        });
        super.setEventListeners();
    }

    _removeErorrMessege(){
        const erorrInputs = this._form.querySelectorAll('.popup__input_type-error');
        erorrInputs.forEach(erorrInput =>{
            erorrInput.classList.remove('popup__input_type-error');
        });

        const erorrMesseges = this._form.querySelectorAll('.popup__error-messege');
        erorrMesseges.forEach(erorrMessege =>{
            erorrMessege.textContent = '';
        });
    }

    close() {
        this._removeErorrMessege();
        this._form.reset();
        super.close();
    }
}

export default PopupWithForm;