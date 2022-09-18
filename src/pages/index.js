import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "./index.css";
import {
  ListCard,
  configValidate,
  profileSelectors,
  initialCards,
  formPopupEditName,
  popupCardsForm,
  editButton,
  addButton
} from "../utils/constants.js";

const userInfo = new UserInfo(profileSelectors);

const popupWithImage = new PopupWithImage('.popup-element');

const openImage = (name, src) => {
  popupWithImage.open(name, src);
}

popupWithImage.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: (dataElement) => {
    const card = new Card({
      data: dataElement,
      templateSelector: '.template-card',
      cardClick: openImage
    });
    return card.getEl();
  }
}, ListCard);

section.renderCards();

function getCard(dataElement) {
  const card = new Card({
    data: dataElement,
    templateSelector: '.template-card',
    cardClick: openImage
  });
  return card.getEl();
}

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup-profile',
  submitForm: (data) => {
    userInfo.setUserInfo({
      name: data['profile-name'],
      job: data['profile-job']
    });
  }
});
popupEditProfile.setEventListeners();

const popupCardAdd = new PopupWithForm({
  popupSelector: '.popup-cards',
  submitForm: (data) => {
    const card = getCard({
      name: data['name'],
      link: data['link']
    });
    section.addEl(card);
  }
});
popupCardAdd.setEventListeners();

const formProfileValidate = new FormValidator(configValidate, formPopupEditName);
const formCardValidate = new FormValidator(configValidate, popupCardsForm);
formProfileValidate.enableValidation();
formCardValidate.enableValidation();

editButton.addEventListener('click', () => {
  popupEditProfile.setInputValue(userInfo.getUserInfo());
  popupEditProfile.open();
});

addButton.addEventListener('click', () => {
  formCardValidate.disableBtn();
  popupCardAdd.open();
});