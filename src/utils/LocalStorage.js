const PersistentData =  {
      persist: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),
      get: (key) => JSON.parse(window.localStorage.getItem(key)),
      remove: (key) => window.localStorage.removeItem(key),
  }

export default PersistentData;
  