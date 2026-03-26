document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signUpForm');

    const validateInput = (input, errorId, pattern = null) => {
        const errorMessage = document.getElementById(errorId);
        if (input.value.trim() === '' || (pattern && !pattern.test(input.value))) {
            errorMessage.style.display = 'block';
            input.classList.add('invalid');
            return false;
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('invalid');
            return true;
        }
    };

    form.addEventListener('submit', (event) => {
        const nameValid = validateInput(document.getElementById('name'), 'nameError');
        const phoneValid = validateInput(document.getElementById('phone'), 'phoneError', /^[0-9]{10}$/);
        const emailValid = validateInput(document.getElementById('email'), 'emailError', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const collegeValid = validateInput(document.getElementById('college'), 'collegeError');
        const locationValid = validateInput(document.getElementById('location'), 'locationError');

        if (!nameValid || !phoneValid || !emailValid || !collegeValid || !locationValid) {
            alert('Please fill in all fields correctly.');
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });

    form.addEventListener('input', (event) => {
        const input = event.target;
        if (input.id === 'name') validateInput(input, 'nameError');
        if (input.id === 'phone') validateInput(input, 'phoneError', /^[0-9]{10}$/);
        if (input.id === 'email') validateInput(input, 'emailError', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (input.id === 'college') validateInput(input, 'collegeError');
        if (input.id === 'location') validateInput(input, 'locationError');
    });
});