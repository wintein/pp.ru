function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('active');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('active');
    }
}

function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_-]{5,25}$/;
    if (!username) return "Имя пользователя обязательно для заполнения";
    if (username.length < 5) return "Имя пользователя должно быть не короче 5 символов";
    if (username.length > 25) return "Имя пользователя должно быть не длиннее 25 символов";
    if (!regex.test(username)) return "Имя пользователя может содержать только латиницу, цифры, \"-\" и \"_\"";
    return "";
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email) return "Email обязателен для заполнения";
    if (email.length < 6) return "Email должен быть не короче 6 символов";
    if (email.length > 30) return "Email должен быть не длиннее 30 символов";
    if (!emailRegex.test(email)) return "Пожалуйста, введите корректный email (пример: user@example.com)";
    
    // Проверка на недопустимые символы
    const invalidCharsRegex = /[^a-zA-Z0-9@._-]/;
    if (invalidCharsRegex.test(email)) return "Email содержит недопустимые символы";
    
    return "";
}

function validatePassword(password) {
    // Разрешенные символы: латиница (a-z, A-Z), цифры (0-9) и стандартные спецсимволы
    const allowedCharsRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    
    // Проверка на обязательное наличие букв латиницы
    const letterRegex = /[a-zA-Z]/;
    // Проверка на обязательное наличие цифр
    const numberRegex = /[0-9]/;
    // Проверка на наличие спецсимволов
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
    if (!password) return "Пароль обязателен для заполнения";
    if (password.length < 8) return "Пароль должен быть не короче 8 символов";
    if (password.length > 25) return "Пароль должен быть не длиннее 25 символов";
    if (!allowedCharsRegex.test(password)) return "Пароль может содержать только латиницу, цифры и спецсимволы";
    if (!letterRegex.test(password)) return "Пароль должен содержать буквы латиницы";
    if (!numberRegex.test(password)) return "Пароль должен содержать цифры";
    if (!specialCharRegex.test(password)) return "Пароль должен содержать спецсимволы";
    if (!letterRegex.test(password) && !numberRegex.test(password) && specialCharRegex.test(password)) {
        return "Пароль не может состоять только из спецсимволов";
    }
    return "";
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(`${inputId}-error`);
    
    if (message) {
        input.classList.add('invalid');
        errorElement.textContent = message;
    } else {
        input.classList.remove('invalid');
        errorElement.textContent = '';
    }
}

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    const usernameError = validateUsername(username);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    showError('username', usernameError);
    showError('email', emailError);
    showError('password', passwordError);
    
    if (!usernameError && !emailError && !passwordError) {
        window.location.href = 'main.html';
        return false;
    }
    
    return false;
}

// Добавляем валидацию при вводе
document.getElementById('username').addEventListener('input', function() {
    const username = this.value.trim();
    const error = validateUsername(username);
    showError('username', error);
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const error = validateEmail(email);
    showError('email', error);
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const error = validatePassword(password);
    showError('password', error);
});