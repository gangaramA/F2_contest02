document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMsg = document.getElementById('successMsg');

    email.addEventListener('input', () => {
        if (email.value.length > 3 && email.value.includes('@') && email.value.includes('.')) {
            emailError.style.display = 'none';
            if (passwordError.style.display === 'none') {
                successMsg.style.display = 'block';
            }
        } else {
            emailError.style.display = 'block';
            successMsg.style.display = 'none';
        }
    });

    password.addEventListener('input', () => {
        if (password.value.length > 8) {
            passwordError.style.display = 'none';
            if (emailError.style.display === 'none') {
                successMsg.style.display = 'block';
            }
        } else {
            passwordError.style.display = 'block';
            successMsg.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (confirm('Do you want to submit the form?')) {
            alert('Successful signup!');
        } else {
            window.location.reload();
        }
    });
});
