export default function debounce(fn, ms) {
  let timeout;

  return function (...args) {
    const fnCall = () => {
      fn.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}
