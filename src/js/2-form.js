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

function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    } catch {
        return json;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(localStorageKey);
    form.email.value = data?.email || '';
    form.message.value = data?.message || '';
    formData.email = data?.email || '';
    formData.message = data?.message || '';
});

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