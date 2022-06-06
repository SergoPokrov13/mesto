const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__close');
const formPopup = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const toFormNameProfile = popup.querySelector('.popup__input_type_name');
const toFormInfoProfile = popup.querySelector('.popup__input_type_job');


editButton.addEventListener('click', function() {
    openPopup(popup);
});

closePopupButton.addEventListener('click', function(event){
    closePopup(popup);
});     

formPopup.addEventListener('submit', function(event){
    submitPopup();
});

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');    
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');    
}

function submitPopup(){
    event.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popup);
}