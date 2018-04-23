export const ROOT_URL = 'http://localhost:3001'; // http://localhost:3001';

export const AUTH_HEADERS = { Authorization: 'hello-mr-anderson', Accept: 'application/json' };

export function setToken() {
  function randomNumber() {
    return Math.floor((2 + Math.random()) * 0x10000)
      .toString(15)
      .substring(2);
  }
  return randomNumber();
}
