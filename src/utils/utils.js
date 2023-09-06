// MAKE REQUEST TO THE SERVER
export function makeRequest(url, endpoint, method, body) {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method, headers, credentials: 'include' };
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

  return function f(...args) {
    const fnCall = () => {
      fn.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

export function correctYearsNaming(data) {
  const roundData = Math.round(data);
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
// DATE FORMAT
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}.${formattedMonth}.${year}`;
};

export function convertNumberToDate(ms) {
  const inputDate = new Date(ms);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Установка времени текущей даты в полночь
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1); // Вычисление даты вчера

  if (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  ) {
    // Если дата совпадает с текущей датой, вернем "сегодня"
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    return `сегодня ${hours}:${minutes}`;
    // eslint-disable-next-line no-else-return
  } else if (
    inputDate.getDate() === yesterdayDate.getDate() &&
    inputDate.getMonth() === yesterdayDate.getMonth() &&
    inputDate.getFullYear() === yesterdayDate.getFullYear()
  ) {
    // Если дата совпадает с датой вчера, вернем "вчера"
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    return `вчера, ${hours}:${minutes}`;
  } else {
    // В противном случае, вернем форматированную дату и время
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear().toString().slice(-2);

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();

    return `${formattedDay}.${formattedMonth}.${year} ${hours}:${minutes}`;
  }
}

export function convertAnswers(counter) {
  if (counter === 1 || counter === 21) {
    return `${counter} Ответ`;
  }

  if (counter === 2 || counter === 3 || counter === 4) {
    return `${counter} Ответа`;
  }

  return `${counter} Ответов`;
}

export function deleteSpaces(string) {
  return string.replace(/ +g/, ' ').trim();
}
