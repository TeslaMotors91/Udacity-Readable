export const ROOT_URL = 'http://localhost:3001'; // http://localhost:3001';

export const AUTH_HEADERS = { Authorization: 'whatever-you-want', Accept: 'application/json' };

export function setToken() {
  function randomNumber() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return randomNumber();
}
