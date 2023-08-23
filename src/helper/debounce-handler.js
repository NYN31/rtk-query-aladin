// Debounce Function
export const debounceHandler = (fn, delay = 2000) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// Throttle Function
export const throttleHandler = (fn, limit = 500) => {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
