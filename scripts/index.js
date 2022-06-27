const popupEditName = document.querySelector('.popup-profile');
const editButton = document.querySelector('.profile__button-edit');
const closePopupEditNameButton = popupEditName.querySelector('.popup__close');
const formPopupEditName = popupEditName.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const toFormNameProfile = popupEditName.querySelector('.popup__input_type_name');
const toFormInfoProfile = popupEditName.querySelector('.popup__input_type_job');
const cardListElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.template__card').content;
const addButton = document.querySelector('.profile__button-add');
const popupCards = document.querySelector('.popup-cards');
const closePopupCards = popupCards.querySelector('.popup__close');
const popupCardsForm = popupCards.querySelector('.popup__form');
const toFormNameCards = popupCards.querySelector('.popup__input_type_name');
const toFormLinkCards = popupCards.querySelector('.popup__input_type_link');
const popupElement = document.querySelector('.popup-element');
const closePopupElement = popupElement.querySelector('.popup-element__close');
const popupElemenImg = popupElement.querySelector('.popup-element__img');
const popupElemetInfo = popupElement.querySelector('.popup-element__title');

const createCard = (name, link) => {
    const card = cardTemplate
        .querySelector('.element')
        .cloneNode(true);

    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__img').src = link;
    card.querySelector('.element__img').alt = name;
    addListener(card);
    return card;
}

const publickCard = card => {
    cardListElement.prepend(card);

}

const addPopupElement = card => {
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
    cardImage.addEventListener('click', function (evt) {
        const infoCard = evt.target.closest('.element');
        addPopupElement(infoCard);
    });
}

initialCards.forEach((item) => {
    const card = createCard(item.name, item.link);
    publickCard(card);
});

const addCard = evt => {
    evt.preventDefault();
    const name = toFormNameCards.value;
    const link = toFormLinkCards.value;
    const card = createCard(name, link);
    publickCard(card);
    closePopup(popupCards);
}

addButton.addEventListener('click', () => {
    openPopup(popupCards);
    popupCardsForm.reset();
});

editButton.addEventListener('click', () => {
    openPopupProfile(popupEditName);
});

closePopupEditNameButton.addEventListener('click', () => {
    closePopup(popupEditName);
});

closePopupCards.addEventListener('click', () => {
    closePopup(popupCards);
});

closePopupElement.addEventListener('click', () => {
    closePopup(popupElement);
});

formPopupEditName.addEventListener('submit', (evt) => {
    submitPopupProfile(evt);
});

popupCardsForm.addEventListener('submit', addCard);

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function openPopupProfile(popupElement) {
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
    openPopup(popupElement);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function submitPopupProfile(evt) {
    evt.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popupEditName);
}

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
});

document.body.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
})



