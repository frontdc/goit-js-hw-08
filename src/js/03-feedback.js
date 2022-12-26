import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormData);
form.addEventListener('submit', onSubmitForm);

let formData = {
  email: '',
  message: '',
};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  syncToStorage();
}

const syncToStorage = throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500)

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  let data;
  
  try {
    data = JSON.parse(localStorage.getItem('feedback-form-state')) || ({})
  } catch (e) {
    data = {};
  }
  
  formData = {
    ...formData,
    ...data,
  }

  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  email.value = formData.email || '';
  message.value = formData.message || '';
})();