class Card {

    constructor({data, templateSelector, userId, cardClick, cardRemove,cardLike}) {
        this.id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._cardClick = cardClick;
        this._cardRemove = cardRemove;
        this._cardLike = cardLike;
    }

    _getTemplate() {
        const card = document.querySelector('.template__card')
            .content
            .querySelector('.element')
            .cloneNode(true);

        return card;
    }

    remove() {
        this._card.remove();
        this._card = null;
    }

    _toggleBtnLike() {
        this._btnLike.classList.toggle('element__like_active')
    }

    _handleBtnLikeClick() {
        if (this._btnLike.classList.contains('element__like_active')) {
            this._cardLike(this, 'DELETE');
        } else {
            this._cardLike(this, 'PUT');
        }
    }

    updateCountLike(data) {
        this._likes = data.likes;
        this._likeCountElement.textContent = this._likes.length;
        this._toggleBtnLike();
    }

    _checkUserLike() {
        this._likes.forEach(item => {
            if (item._id === this._userId) {
                this._toggleBtnLike();
            }
        });
    }

    _setEventListeners() {
        this._btnLike.addEventListener('click', () => this._handleBtnLikeClick());
        this._image.addEventListener('click', () => this._cardClick(this._name, this._link));
        this._setEventRemoveCard();
    }

    _setEventRemoveCard() {
        this._btnRemove = this._card.querySelector('.element__button-delete');
        if (this._ownerId === this._userId) {
            this._btnRemove.addEventListener('click', () => this._cardRemove(this));
        } else {
            this._btnRemove.remove();
            this._btnRemove = null;
        }
    }

    getEl() {
        this._card = this._getTemplate();
        this._btnLike = this._card.querySelector('.element__like');
        this._image = this._card.querySelector('.element__img');
        this._likeCountElement = this._card.querySelector('.element__like-count');
        this._checkUserLike();

        this._card.querySelector('.element__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likeCountElement.textContent = this._likes;
        this._likeCountElement.textContent = this._likes.length;

        this._setEventListeners();
        return this._card;
    }
}

export default Card;