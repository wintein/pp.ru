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

function validateForm() { 
    const emailInput = document.getElementById('email'); 
    const passwordInput = document.getElementById('password'); 
   
    if (!emailInput.value || !passwordInput.value) { 
        alert('Пожалуйста, заполните все поля.'); 
        return false; 
    } 
    window.location.href = 'main.html' 
    return false;  
    } 
