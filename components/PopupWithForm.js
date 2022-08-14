import Popup from "./Popup.js";

class PopupWithForm extends Popup {
       constructor({popupSelector, submitForm}) {
            super(popupSelector);
            this._form = this._popup.querySelector('.popup__form');
            this._submitForm = submitForm;
        }
    
        _inputValue() {
            const data = {};
            const inputs = this._form.querySelectorAll('.popup__input');
            inputs.forEach(input => {
                data[input.name] = input.value;
            });
            return data;
        }
    
        closePopup() {   
            this._form.reset();
            super.close()
        }

        setEventListeners() {   
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                const dataInputs = this._inputValue();
                this._submitForm(dataInputs);
                this.closePopup();
            });
            super.setEventListeners();
        }  
    } 

export default PopupWithForm;