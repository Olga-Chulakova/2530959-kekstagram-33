const isEscapeKey = (evt) => evt.key === 'Escape';
const DEBOUNCE_TIME = 500;

const debounce = (callback, timeoutDelay = DEBOUNCE_TIME) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, debounce, DEBOUNCE_TIME };
