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

export function correctExp(data) {
  const roundData = Math.round(data.exp);
  if (roundData >= 11 && roundData <= 19) {
    return `${roundData} лет`;
  }
  if (roundData === 1 || roundData % 10 === 1) {
    return `${roundData} год`;
  }
  if (roundData % 10 === 2 || roundData % 10 === 3 || roundData % 10 === 4) {
    return `${roundData} года`;
  }
  if (
    roundData % 10 === 0 ||
    roundData % 10 === 5 ||
    roundData % 10 === 6 ||
    roundData % 10 === 7 ||
    roundData % 10 === 8 ||
    roundData % 10 === 9
  ) {
    return `${roundData} лет`;
  }

  return 0;
}
