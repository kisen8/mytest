// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', throttle(onInput, 500));

// function onInput() {
//   const objectToSave = { email: email.value, message: message.value };
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
// }

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const { email, message } = e.currentTarget;
//   if (email.value === '' || message.value === '') {
//     return alert('Все поля должны быть заполнены!');
//   }

//   JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//   console.log({ email: email.value, message: message.value });
//   form.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const storageData = load(LOCALSTORAGE_KEY);
// if (storageData) {
//   email.value = storageData.email;
//   message.value = storageData.message;
// }
// ----------------------------------------------------------------

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('input[name="email"]');
const mess = document.querySelector('textarea[name="message"]');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', onInput);

function onInput() {
  const object = {
    email: mail.value,
    message: mess.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(object));
}
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please take info for all of fields');
  }
  JSON.parse(localStorage.getItem(LOCAL_KEY));
  console.log({ mail: mail.value, mess: mess.value });
  form.reset();
  localStorage.removeItem(LOCAL_KEY);
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const localStorageInfo = load(LOCAL_KEY);

if (localStorageInfo) {
  mail.value = localStorageInfo.email;
  mess.value = localStorageInfo.message;
}
