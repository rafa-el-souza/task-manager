const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const readLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const removeFromLocalStorage = (key) => localStorage.removeItem(key);

export {
  setLocalStorage,
  readLocalStorage,
  removeFromLocalStorage,
};
