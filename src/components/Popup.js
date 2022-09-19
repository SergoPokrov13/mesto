import FormValidator from "../components/FormValidator.js";

class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._escClose = this._escClose.bind(this);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escClose);
    }

    _escClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escClose);
    }

    setEventListeners() {
        this._popup.addEventListener('click', evt => {
            if (evt.target === this._popup || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}


export default Popup;
