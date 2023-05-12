const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(() => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const formData = {
    email,
    message
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

window.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    const { email, message } = JSON.parse(storedData);

    form.elements.email.value = email;
    form.elements.message.value = message;
  } else {
    form.reset();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const formData = {
    email,
    message
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
