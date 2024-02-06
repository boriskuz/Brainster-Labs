'use strict';

//////////////////////// SELECT ////////////////////////

const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.option');
const sBtn_text = optionMenu.querySelector('.sBtn-text');
let optionClicked = false;

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

options.forEach((option) => {
  option.addEventListener('click', () => {
    let selectedOption = option.querySelector('.option-text').innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove('active');

    // CHECK INPUT SELECT
    optionClicked = true;
  });
});

//////////////////////// INPUT VALIDATION ////////////////////////

const usernameEl = document.querySelector('#name');
const companyNameEl = document.querySelector('#companyName');
const emailEl = document.querySelector('#email');
const phoneNumberEl = document.querySelector('#phoneNumber');

const form = document.querySelector('#signup');

form.addEventListener('submit', function (e) {
  e.preventDefault();
});

const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) => (length < min || length > max ? false : true);
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('valid');
  formField.classList.add('error-input');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.add('valid');

  const error = formField.querySelector('small');
  error.textContent = '';
};

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, 'Внесете го вашето име и презиме.');
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Полето мора да содржи помеѓу ${min} и ${max} карактери.`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

const checkCompanyName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const companyName = companyNameEl.value.trim();

  if (!isRequired(companyName)) {
    showError(companyNameEl, 'Внесете го името на вашата компанија.');
  } else if (!isBetween(companyName.length, min, max)) {
    showError(companyNameEl, `Полето мора да содржи помеѓу ${min} и ${max} карактери.`);
  } else {
    showSuccess(companyNameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Внесете го вашиот имејл.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Имејлот не е валиден.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPhoneNumber = () => {
  let valid = false;
  const min = 9,
    max = 13;
  const phoneNumber = phoneNumberEl.value.trim();

  if (!isRequired(phoneNumber)) {
    showError(phoneNumberEl, 'Внесете го вашиот телефонски број.');
  } else if (!isBetween(phoneNumber.length, min, max)) {
    showError(phoneNumberEl, `Полето мора да содржи помеѓу ${min} и ${max} карактери.`);
  } else {
    showSuccess(phoneNumberEl);
    valid = true;
  }
  return valid;
};

const checkSelectOption = () => {
  let valid = false;

  if (optionClicked === false) {
    showError(selectBtn, 'Изберете тип на студенти.');
  } else {
    showSuccess(selectBtn);
    valid = true;
  }
  return valid;
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkUsername(), checkCompanyName(), checkEmail(), checkPhoneNumber(), checkSelectOption();
});
