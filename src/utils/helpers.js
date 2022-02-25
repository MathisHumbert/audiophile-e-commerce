import validator from 'validator';

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const preventScroll = (open) => {
  const root = document.getElementById('root');

  if (open) {
    root.classList.add('prevent-scroll');
  } else {
    root.classList.remove('prevent-scroll');
  }
};

export const controlForm = (emoney) => {
  let formIsFullAndValidate = true;
  const formControls = document.querySelectorAll('.control-form');

  formControls.forEach((item) => {
    const input = item.children[1];

    if (validator.isEmpty(input.value)) {
      if (
        (input.id === 'emoneyNumber' || input.id === 'emoneyPin') &&
        !emoney
      ) {
        item.classList.remove('error');
      } else {
        item.classList.add('error');
        formIsFullAndValidate = false;
      }
    } else {
      item.classList.remove('error');
    }

    if (input.type === 'email' && !validator.isEmail(input.value)) {
      item.classList.add('error');
      formIsFullAndValidate = false;
    }
  });

  return formIsFullAndValidate;
};

export const controlInput = (e) => {
  const form = e.target.parentElement;
  const value = e.target.value;
  const type = e.target.type;

  if (!form.classList.contains('error')) return;

  if (type === 'email' && !validator.isEmail(value)) return;

  if (type === 'number' && !validator.isNumeric(value)) return;

  if (type === 'text' && e.target.id !== 'address' && !validator.isAlpha(value))
    return;

  if (validator.isEmpty(value)) return;

  form.classList.remove('error');
};
