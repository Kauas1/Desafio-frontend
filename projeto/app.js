document.getElementById('btn').addEventListener('click', function () {
    validateForm();
});

function validateForm() {
    var firstName = document.querySelector('.inputUser[placeholder="First name"]');
    var lastName = document.querySelector('.inputUser[placeholder="Last name"]');
    var email = document.querySelector('.inputUser[placeholder="Email Address"]');
    var password = document.querySelector('.inputUser[placeholder="Password"]');

    if (firstName.value.trim() === '') {
        handleInvalidInput(firstName);
    } else {
        handleValidInput(firstName);
    }

    if (lastName.value.trim() === '') {
        handleInvalidInput(lastName);
    } else {
        handleValidInput(lastName);
    }

    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        handleInvalidInput(email);
    } else {
        handleValidInput(email);
    }

    if (password.value.trim() === '' || password.value.length < 6) {
        handleInvalidInput(password);
    } else {
        handleValidInput(password);
    }
}

function handleInvalidInput(inputElement) {
    inputElement.classList.add('invalid');

    inputElement.insertAdjacentHTML('afterend', '<i class="fas fa-exclamation-circle"></i>');
}

function handleValidInput(inputElement) {
    inputElement.classList.remove('invalid');

    var icon = inputElement.parentElement.querySelector('i');
    if (icon) {
        icon.remove();
    }
}

function isValidEmail(email) {
 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
