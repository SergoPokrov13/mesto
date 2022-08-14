import Popup from "./Popup.js";
class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-element__img');
        this._text = this._popup.querySelector('.popup-element__title');
    }

    open(name, src) {
        this._image.src = src;
        this._image.alt = name;
        this._text.textContent = name;
        super.open();
    }
} 

export default PopupWithImage;