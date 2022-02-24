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
