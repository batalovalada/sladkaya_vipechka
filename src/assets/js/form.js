function formValidation(form) {
    /* Remove Error */
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }


    /* Create Error */
    function createError(input, errorText) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = errorText;
        parent.classList.add('error');
        parent.append(errorLabel);

    }

    let result = true;
    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.email == "true") {
            if (!input.value.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) {
                removeError(input);
                createError(input, 'Email введён неверно!');
                result = false;
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input);
                createError(input, 'Поле не заполнено!');
                result = false;
            }
        }
    }

    return result
}






document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();
    if (formValidation(this) == true) {
        alert('Сообшение отправлено успешно!');
    }
});
