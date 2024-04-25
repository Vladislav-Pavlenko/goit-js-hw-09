const formRefs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const formData = {};

const FEEDBACK_FORM_KEY = 'feedback-form-state';

formRefs.form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
});

if (localStorage.getItem(FEEDBACK_FORM_KEY)) {
  const data = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
  formRefs.email.value = data.email || '';
  formRefs.message.value = data.message || '';
}

formRefs.form.addEventListener('submit', event => {
  event.preventDefault();
  if (formRefs.email.value === '' || formRefs.message.value === '') {
    alert('Please, fill in all the fields');
    return;
  } else {
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    formRefs.form.reset();
    console.log(formData);
    formData.email = '';
    formData.message = '';
  }
});
