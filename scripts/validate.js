const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 

    const enableValidation = (config) =>{
        const formPopup = document.querySelectorAll(config.formSelector);
        formPopup.forEach( form =>{
            form.addEventListener('submit', (evt)=>{
                evt.preventDefault();
            });
            setListenerInput(form, config);
        });
    }

    const setListenerInput = (form, config) => {
        const inputListProfile = Array.from(form.querySelectorAll('.popup__input'));
        const popupProfileBtnSubmit = form.querySelector('.popup__button-submit');

        inputListProfile.forEach(function (inputEl) {
            inputEl.addEventListener('input', () =>{
                handleInputValid(inputEl, form, config)
            });
        })
                
    }
    const activateError = (errorEl, message) => {
    const inputEl = document.querySelector(`.popup__input_type_${errorEl.id}`);
    inputEl.classList.add('popup__input_invalid');
    errorEl.textContent = message;
}

const resetError = errorEl =>{
    const inputEl = document.querySelector(`.popup__input_type_${errorEl.id}`);
    inputEl.classList.remove('popup__input_invalid');
    popupProfileBtnSubmit.classList.add('popup__button-submit_invalid');
    console.dir(popupProfileBtnSubmit);
    errorEl.textContent = "";

}

    const handleInputValid = (inputEl, form, config) =>{
          const errorEl = document.querySelector(`.error-${inputEl.id}`);
          if (inputEl.validity.valid){
                inputEl.classList.remove(config.inputErrorClass);
            }else{
                inputEl.classList.add(config.inputErrorClass);
            }

    }

    enableValidation(config);

  
    //                 
    //             });