import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithRemove from "../components/PopupWithRemove.js";
import Api from "../components/Api.js";
import "./index.css";
import {
  ListCard,
  configValidate,
  profileSelectors,
  formPopupEditName,
  popupCardsForm,
  editButton,
  addButton,
  avatar,
  popupAvatarForm
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: '6e94b493-b513-4271-a5ab-96db09cdfced',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(profileSelectors);
const section = new Section(getCard, ListCard);

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup-profile',
  submitForm: (data) => {
    popupEditProfile.loadingButtonForm(true);
    api.setUserInfo(data)
    .then(data => {
      userInfo.setUserInfo(data);
    })
    .catch(err => console.log(err))
    .finally(() => popupEditProfile.loadingButtonForm(false));
  }
});
popupEditProfile.setEventListeners();

const popupCardAdd = new PopupWithForm({
  popupSelector: '.popup-cards',
  submitForm: (inputsData) => {
    popupCardAdd.loadingButtonForm(true);
    api.createCard(inputsData['name'], inputsData['link'])
    .then(data => {
      section.addEl(data);
    })
    .catch(err => console.log(err))
    .finally(() => popupCardAdd.loadingButtonForm(false));
  }
});
popupCardAdd.setEventListeners();

const popupWithUpdateAvatar = new PopupWithForm({
  popupSelector: '.popup__avatar',
  submitForm: (data) => {
    popupWithUpdateAvatar.loadingButtonForm(true);
    api.setUserAvatar(data['link'])
    .then(data => {
      userInfo.setUserInfo(data);
    })
    .catch(err => console.log(err))
    .finally(() => popupWithUpdateAvatar.loadingButtonForm(false));
  }
});
popupWithUpdateAvatar.setEventListeners();

const popupWithImage = new PopupWithImage('.popup-element');
popupWithImage.setEventListeners();

const popupWithRemoveCard = new PopupWithRemove('.popup__remove');
popupWithRemoveCard.setEventListeners();

function getCard(dataElement) {
  const card = new Card({
    data: dataElement,
    templateSelector: '.template-card',
    userId: userInfo.getUserId(),
    cardClick: (name, src) => popupWithImage.open(name, src),
    cardRemove: (card) =>{
      popupWithRemoveCard.open();
      popupWithRemoveCard.setActionSubmit(() => {
        api.removeCard(card.id)
          .then(data => {
            card.remove();
            popupWithRemoveCard.close();
          })
          .catch(err => console.log(err));  
      });
    },
    cardLike: (card, method) => {
      api.likeCard(method, card.id)
        .then(data => {
          card.updateCountLike(data);
        })
        .catch(err => console.log(err));
    }
  });
  return card.getEl();
}

const formProfileValidate = new FormValidator(configValidate, formPopupEditName);
const formCardValidate = new FormValidator(configValidate, popupCardsForm);
const formAvatarValidate = new FormValidator(configValidate, popupAvatarForm);
formProfileValidate.enableValidation();
formCardValidate.enableValidation();
formAvatarValidate.enableValidation();

editButton.addEventListener('click', () => {
  popupEditProfile.setInputValue(userInfo.getUserInfo());
  formProfileValidate.removeErorrMessege();
  popupEditProfile.open();
});

addButton.addEventListener('click', () => {
  formCardValidate.removeErorrMessege();
  formCardValidate.disableBtn();
  popupCardAdd.open();
});

avatar.addEventListener('click', () => {
  formAvatarValidate.disableBtn();
  popupWithUpdateAvatar.open();
});

Promise.all([api.getCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    userInfo.setUserInfo(userData);
    section.renderedCards(cards);
  })
  .catch(err => console.log(err));