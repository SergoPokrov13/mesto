import initialCards from "./data.js";
import FormValidator from "./Formvalidate.js";
import Card from "./Card.js";

const configValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type-error',
};

const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const popupEditName = document.querySelector('.popup-profile');
const toFormNameProfile = popupEditName.querySelector('.popup__input_type_name');
const toFormInfoProfile = popupEditName.querySelector('.popup__input_type_job');
const formPopupEditName = popupEditName.querySelector('.popup__form');
const popupCard = document.querySelector('.popup-cards');
const popupCardsForm = popupCard.querySelector('.popup__form');
const toFormNameCards = popupCard.querySelector('.popup__input_type_name');
const toFormLinkCards = popupCard.querySelector('.popup__input_type_link');
const popupCardForm = popupCard.querySelector('.popup__form');
const profileSubmitBtn = popupEditName.querySelector('.popup__button-submit');
const popupElement = document.querySelector('.popup-element');
const popupElemenImg = popupElement.querySelector('.popup-element__img');
const popupElemetInfo = popupElement.querySelector('.popup-element__title');

const popups = document.querySelectorAll('.popup');
const cardListElement = document.querySelector('.elements__list');

const formProfileValidate = new FormValidator(configValidate, formPopupEditName);
const formCardValidate = new FormValidator(configValidate, popupCardsForm);
formProfileValidate.enableValidation();
formCardValidate.enableValidation();

function saveCard(evt) {
  evt.preventDefault();
  const card = getCard({ name: toFormNameCards.value, link: toFormLinkCards.value });
  cardListElement.prepend(card);
  popupCardForm.reset();
  closePopup(popupCard);
}
function openImage(name, src) {
  popupElemenImg.src = src;
  popupElemenImg.alt = name;
  popupElemetInfo.textContent = name;
  openPopup(popupElement);
}

function getCard(dataElement) {
  const card = new Card(dataElement, '.template__card', openImage);
  return card.getEl();
}

function editProfile() {
  toFormNameProfile.value = nameProfile.textContent;
  toFormInfoProfile.value = infoProfile.textContent;
  openPopup(popupEditName);
}
function saveProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = toFormNameProfile.value;
  infoProfile.textContent = toFormInfoProfile.value;
  closePopup(popupEditName);
}

function prependCards() {
  const cards = initialCards.map(getCard);
  cardListElement.append(...cards);
}
prependCards();
editButton.addEventListener('click', editProfile);
formPopupEditName.addEventListener('submit', saveProfile);
addButton.addEventListener('click', () => {
  formCardValidate.disableBtn();
  openPopup(popupCard);
});
popupCardForm.addEventListener('submit', saveCard);
popups.forEach(popup => {
  popup.addEventListener('click', evt => {
    if (evt.target === popup || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKey);
}

function closePopupKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKey);
}