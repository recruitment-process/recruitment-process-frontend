// MAKE REQUEST TO THE SERVER
export function makeRequest(url, endpoint, method, body) {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method, headers };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${url}${endpoint}`, config).then((res) => {
    const result = res.json();
    return res.ok ? result : result.then((err) => Promise.reject(err));
  });
}

export function debounce(fn, ms) {
  let timeout;

  return function (...args) {
    const fnCall = () => {
      fn.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}
