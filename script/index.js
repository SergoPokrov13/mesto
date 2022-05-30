const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__close');
const formPopup = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const toFormNameProfile = popup.querySelector('.popup__input_title');
const toFormInfoProfile = popup.querySelector('.popup__input_subtitle');


editButton.addEventListener('click', function() {
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
    openPopup(popup);
});

closePopupButton.addEventListener('click', function(event){
    event.stopPropagation;
    closePopup(popup);
});     

formPopup.addEventListener('submit', function(event){
    event.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popup);
});

function openPopup(popupElement) {
    popupElement.classList.add('popup__open');    
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup__open');    
}
