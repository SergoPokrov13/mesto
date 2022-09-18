class Card {

    constructor({data, templateSelector, cardClick}) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._cardClick = cardClick;
    }

    

    _getTemplate() {
        const card = document.querySelector('.template__card')
            .content
            .querySelector('.element')
            .cloneNode(true);

        return card;
    }

    _buttonLike() {
        this._btnLike.classList.toggle('element__like_active')
    }

    _buttonRemove() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        this._btnLike.addEventListener('click', () => this._buttonLike());
        this._btnRemove.addEventListener('click', () => this._buttonRemove());
        this._image.addEventListener('click', () => this._cardClick(this._name, this._link));
    }

    getEl() {
        this._card = this._getTemplate();
        this._btnLike = this._card.querySelector('.element__like');
        this._btnRemove = this._card.querySelector('.element__button-delete');
        this._image = this._card.querySelector('.element__img');

        this._card.querySelector('.element__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;

        this._setEventListeners();
        return this._card;
    }
}

export default Card;