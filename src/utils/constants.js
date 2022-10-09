export const profileSelectors = {
    nameSelector: '.profile__name',
    jobSelector: '.profile__text',
    avatarSelector: '.profile__avatar'
};

export const configValidate = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disabled',
    inputErrorClass: 'popup__input_type-error',
};

export const container = document.querySelector('.elements__list');

export const popupEditName = document.querySelector('.popup-profile');
export const formPopupEditName = popupEditName.querySelector('.popup__form');

const popupAvatar = document.querySelector('.popup-avatar');
export const popupAvatarForm = popupAvatar.querySelector('.popup__form');

export const popupCard = document.querySelector('.popup-cards');
export const popupCardsForm = popupCard.querySelector('.popup__form');

export const editButton = document.querySelector('.profile__button-edit');
export const addButton = document.querySelector('.profile__button-add');

export const avatar = document.querySelector('.profile__block');
