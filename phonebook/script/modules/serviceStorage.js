
export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (key, value) => {
  const newArray = [...getStorage(key), value];
  localStorage.setItem(key, JSON.stringify(newArray));
};

export const removeStorage = (key, phoneNumber) => {
  let prevArray = getStorage(key);
  prevArray = prevArray.filter((item) => item.phone !== phoneNumber);
  localStorage.setItem(key, JSON.stringify(prevArray));
};


export const serviceStorage = {
  getStorage,
  setStorage,
  removeStorage,
};

export default {
  getStorage,
  setStorage,
  removeStorage,
};
