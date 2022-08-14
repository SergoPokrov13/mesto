import Card from "../components/Card.js";
import FormValidator from "../components/Formvalidate.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  ListCard,
  configValidate,
  profileSelectors,
  initialCards,
  popupEditName,
  formPopupEditName,
  popupCard,
  popupCardsForm,
  editButton,
  addButton
} from "../utils/constants.js";

const userInfo = new UserInfo(profileSelectors);

const section = new Section({
  items: initialCards,
  renderer: getCard
}, ListCard);
section.initRender();

const popupWithImage = new PopupWithImage('.popup-element');
popupWithImage.setEventListeners();

const popupWithEditProfile = new PopupWithForm({
  popupSelector: '.popup-profile',
  submitForm: (data) => {
    userInfo.setUserInfo({
      name: data['name'],
      job: data['job']
    });
    console.log(data);
  }
});
popupWithEditProfile.setEventListeners();

const popupWithCardAdd = new PopupWithForm({
  popupSelector: '.popup-cards',
  submitForm: (data) => {
    const card = getCard({
      name: data['name'],
      link: data['link']
    });
    section.addItem(card);
  }
});
popupWithCardAdd.setEventListeners();

const formProfileValidate = new FormValidator(configValidate, formPopupEditName);
const formCardValidate = new FormValidator(configValidate, popupCardsForm);
formProfileValidate.enableValidation();
formCardValidate.enableValidation();

function handleOpenImage(name, src) {
  popupWithImage.open(name, src);
}

function getCard(dataElement) {
  const card = new Card({
    data: dataElement,
    templateSelector: '.template-card',
    CardClick: handleOpenImage
  });
  return card.getEl();
}

editButton.addEventListener('click', () => {
  formProfileValidate.disableBtn();
  popupEditName.open();
});

addButton.addEventListener('click', () => {
  formCardValidate.disableBtn();
  popupCard.open();
});

















// function saveCard(evt) {
//   evt.preventDefault();
//   const card = getCard({ name: toFormNameCards.value, link: toFormLinkCards.value });
//   cardListElement.prepend(card);
//   popupCardForm.reset();
//   closePopup(popupCard);
// }
// function openImage(name, src) {
//   popupElemenImg.src = src;
//   popupElemenImg.alt = name;
//   popupElemetInfo.textContent = name;
//   openPopup(popupElement);
// }

// function getCard(dataElement) {
//   const card = new Card(dataElement, '.template__card', openImage);
//   return card.getEl();
// }

// function editProfile() {
//   toFormNameProfile.value = nameProfile.textContent;
//   toFormInfoProfile.value = infoProfile.textContent;
//   openPopup(popupEditName);
// }
// function saveProfile(evt) {
//   evt.preventDefault();
//   nameProfile.textContent = toFormNameProfile.value;
//   infoProfile.textContent = toFormInfoProfile.value;
//   closePopup(popupEditName);
// }

// function prependCards() {
//   const cards = initialCards.map(getCard);
//   cardListElement.append(...cards);
// }
// prependCards();
// editButton.addEventListener('click', editProfile);
// formPopupEditName.addEventListener('submit', saveProfile);
// addButton.addEventListener('click', () => {
//   formCardValidate.disableBtn();
//   openPopup(popupCard);
// });
// popupCardForm.addEventListener('submit', saveCard);
// popups.forEach(popup => {
//   popup.addEventListener('click', evt => {
//     if (evt.target === popup || evt.target.classList.contains('popup__close')) {
//       closePopup(popup);
//     }
//   });
// });

// function openPopup(element) {
//   element.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupKey);
// }

// function closePopupKey(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// function closePopup(element) {
//   element.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupKey);
// }

// const nameProfile = document.querySelector('.profile__name');
// const infoProfile = document.querySelector('.profile__text');



// const toFormNameCards = popupCard.querySelector('.popup__input_type_name');
// const toFormLinkCards = popupCard.querySelector('.popup__input_type_link');
// const popupCardForm = popupCard.querySelector('.popup__form');
// const profileSubmitBtn = popupEditName.querySelector('.popup__button-submit');
// const popupElement = document.querySelector('.popup-element');
// const popupElemenImg = popupElement.querySelector('.popup-element__img');
// const popupElemetInfo = popupElement.querySelector('.popup-element__title');

// const popups = document.querySelectorAll('.popup');
// const cardListElement = document.querySelector('.elements__list');

