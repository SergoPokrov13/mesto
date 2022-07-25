// import {initialCards} from "./data.js";
// import {Card} from "./card.js";




// cardSubmitBtn.disabled = true;
// const popupCardsForm = popupCards.querySelector('.popup__form');



// const createCard = (name, link) => {
//     const card = cardTemplate
//         .querySelector('.element')
//         .cloneNode(true);

//     card.querySelector('.element__title').textContent = name;
//     const image = card.querySelector('.element__img');
//     image.src = link;
//     image.alt = name;
//     addListener(card);
//     return card;
// }

// const prependCard = card => {
//     cardListElement.prepend(card);

// }

// const openImagePopup = card => {
//     popupElemenImg.src = card.querySelector('.element__img').src;
//     popupElemenImg.alt = card.querySelector('.element__img').alt;
//     popupElemetInfo.textContent = card.querySelector('.element__title').textContent;
//     openPopup(popupElement);
// }

// // const addListener = card => {
//     // const card = new Card(element, '.template-card', handleOpenImage);
//     // return card.getElement();
// // }

// initialCards.forEach((item) => {
//     const card = createCard(item.name, item.link);
//     prependCard(card);
// });

// // const addCard = evt => {
// //     evt.preventDefault();
// //     const name = toFormNameCards.value;
// //     const link = toFormLinkCards.value;
// //     const card = createCard(name, link);
// //     prependCard(card);
// //     closePopup(popupCards);
// // }

// addButton.addEventListener('click', () => {
//     openPopup(popupCards);
// });

// editButton.addEventListener('click', () => {
//     openPopupProfile(popupEditName);
// });

// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// formPopupEditName.addEventListener('submit', (evt) => {
//     submitPopupProfile(evt);
// });

// popupCardsForm.addEventListener('submit', (evt) => {
//         addCard(evt);
//         popupCardsForm.reset();
//         disableButtonForm(cardSubmitBtn);
// });

// function openPopup(popupElement) {
//     popupElement.classList.add('popup_opened');
//     document.addEventListener('keydown', handleEscKey);
//     document.addEventListener('mousedown', handleClickOver);
// }

// function openPopupProfile(popupElement) {
//     toFormNameProfile.value = nameProfile.textContent;
//     toFormInfoProfile.value = infoProfile.textContent;
//     openPopup(popupElement);
// }

// function closePopup(popupElement) {
//     popupElement.classList.remove('popup_opened');
//     document.removeEventListener('keydown', handleEscKey);
//     document.removeEventListener('mousedown', handleClickOver);
// }

// function submitPopupProfile(evt) {
//     evt.preventDefault();
//     nameProfile.textContent = toFormNameProfile.value;
//     infoProfile.textContent = toFormInfoProfile.value;
//     closePopup(popupEditName);
// }

// const handleEscKey = (evt) => {
//     if (evt.key === 'Escape') {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup);
//     }
// }

// const handleClickOver = (evt) => {
//     if (evt.target.classList.contains('popup')) {
//         closePopup(evt.target);
//     }
// }

