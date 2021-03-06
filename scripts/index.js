const closeButtons = document.querySelectorAll('.popup__close');
const popupEditName = document.querySelector('.popup-profile');
const editButton = document.querySelector('.profile__button-edit');
const formPopupEditName = popupEditName.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const toFormNameProfile = popupEditName.querySelector('.popup__input_type_name');
const toFormInfoProfile = popupEditName.querySelector('.popup__input_type_job');
const cardListElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.template__card').content;
const addButton = document.querySelector('.profile__button-add');
const popupCards = document.querySelector('.popup-cards');
const cardSubmitBtn = popupCards.querySelector('.popup__button-submit');
cardSubmitBtn.disabled = true;
const popupCardsForm = popupCards.querySelector('.popup__form');
const toFormNameCards = popupCards.querySelector('.popup__input_type_name');
const toFormLinkCards = popupCards.querySelector('.popup__input_type_link');
const popupElement = document.querySelector('.popup-element');
const popupElemenImg = popupElement.querySelector('.popup-element__img');
const popupElemetInfo = popupElement.querySelector('.popup-element__title');

const createCard = (name, link) => {
    const card = cardTemplate
        .querySelector('.element')
        .cloneNode(true);

    card.querySelector('.element__title').textContent = name;
    const image = card.querySelector('.element__img');
    image.src = link;
    image.alt = name;
    addListener(card);
    return card;
}

const prependCard = card => {
    cardListElement.prepend(card);

}

const openImagePopup = card => {
    popupElemenImg.src = card.querySelector('.element__img').src;
    popupElemenImg.alt = card.querySelector('.element__img').alt;
    popupElemetInfo.textContent = card.querySelector('.element__title').textContent;
    openPopup(popupElement);
}

const addListener = card => {
    const likeButton = card.querySelector('.element__like');
    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    const delButton = card.querySelector('.element__button-delete');
    delButton.addEventListener('click', function (evt) {
        const card = evt.target.closest('.element');
        card.remove();
    });

    const cardImage = card.querySelector('.element__img');
    cardImage.addEventListener('click', () => {
        openImagePopup(card);
    });
}

initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    prependCard(card);
});

const addCard = evt => {
    evt.preventDefault();
    const name = toFormNameCards.value;
    const link = toFormLinkCards.value;
    const card = createCard(name, link);
    prependCard(card);
    closePopup(popupCards);
}

addButton.addEventListener('click', () => {
    openPopup(popupCards);
});

editButton.addEventListener('click', () => {
    openPopupProfile(popupEditName);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formPopupEditName.addEventListener('submit', (evt) => {
    submitPopupProfile(evt);
});

popupCardsForm.addEventListener('submit', (evt) => {
        addCard(evt);
        popupCardsForm.reset();
        disableButtonForm(cardSubmitBtn);
});

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleClickOver);
}

function openPopupProfile(popupElement) {
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
    openPopup(popupElement);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscKey);
    document.removeEventListener('mousedown', handleClickOver);
}

function submitPopupProfile(evt) {
    evt.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popupEditName);
}

const handleEscKey = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

const handleClickOver = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

