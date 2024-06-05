const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', () => {
    formData.email = form.email.value.trim();
    formData.message = form.message.value.trim();
    saveLS(localStorageKey, formData);
});

function saveLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};

form.addEventListener('submit', event => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        formData.email = '';
        formData.message = '';
        form.reset();
    }
});