const popup = document.querySelector('.popup-profile');
const editButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__close');
const formPopup = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const toFormNameProfile = popup.querySelector('.popup__input_type_name');
const toFormInfoProfile = popup.querySelector('.popup__input_type_job');
const cardListElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.template__card').content;
const addButton = document.querySelector('.profile__button-add');
const popupCards = document.querySelector('.popup-cards');
const closePopupCards = popupCards.querySelector('.popup__close');
const popupCardsForm = popupCards.querySelector('.popup__form');
const toFormNameCards = popupCards.querySelector('.popup__input_type_name');
const toFormLinkCards = popupCards.querySelector('.popup__input_type_job');
const popupElement = document.querySelector('.popup-element');
const closePopupElement = popupElement.querySelector('.popup-element__close');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const createCard = (name, link) => {
    const card = cardTemplate
        .querySelector('.element')
        .cloneNode(true);

    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__img').src = link;
    addListener(card);
    cardListElement.prepend(card);

    const cardImage = card.querySelector('.element__img');

    cardImage.addEventListener('click', function (evt) {
        const infoCard = evt.target.closest('.element');
        addPopupElement(infoCard);
    });
}

const addPopupElement = card => {
    popupElement.querySelector('.popup-element__img').src = card.querySelector('.element__img').src;
    popupElement.querySelector('.popup-element__title').textContent = card.querySelector('.element__title').textContent;
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
}

initialCards.forEach((item) => {
    createCard(item.name, item.link);
});

const addCard = e => {
    e.preventDefault();
    const name = toFormNameCards.value;
    const link = toFormLinkCards.value;
    createCard(name, link);
    closePopup(popupCards);

}

addButton.addEventListener('click', ()=> {
    openPopup(popupCards);
    toFormNameCards.value = '';
    toFormLinkCards.value = '';
});

editButton.addEventListener('click', ()=> {
    openPopup(popup);
});

closePopupButton.addEventListener('click', ()=> {
    closePopup(popup);
});

closePopupCards.addEventListener('click', ()=> {
    closePopup(popupCards);
});

closePopupElement.addEventListener('click', ()=> {
    closePopup(popupElement);
});

formPopup.addEventListener('submit', ()=> {
    submitPopup();
});

popupCardsForm.addEventListener('submit', addCard);

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function submitPopup() {
    event.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popup);
}
