import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = submitForm;
        this._inputs = this._form.querySelectorAll('.popup__input');
        this._buttonSubmit = this._form.querySelector('.popup__button-submit');
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
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }

    renderLoading(bool) {
        if (bool) {
            this._buttonSubmit.textContent = 'Сохранение...'
        } else {
            this._buttonSubmit.textContent = 'Сохранить'
        }
    }
}

export default PopupWithForm;