export const getLocalStorageData = key => {
  const storageData = window.localStorage.getItem('kurs');
  if (!storageData) {
    return null;
  }
  if (key) {
    return JSON.parse(storageData)[key];
  }
  return JSON.parse(storageData);
}

export const setLocalStorageData = (key, data) => {
  const storageData = getLocalStorageData();
  if (!storageData) {
    return window.localStorage.setItem('kurs', JSON.stringify({ [key]: data }));
  }
  storageData[key] = data;
  window.localStorage.setItem('kurs', JSON.stringify(storageData));
}