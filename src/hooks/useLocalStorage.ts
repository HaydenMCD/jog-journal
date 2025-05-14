type LocalStorageKey = 'distanceType' | 'theme';

type StorageValueMap = {
  distanceType: 'Kilometers' | 'Miles';
  theme: 'light' | 'dark';
};

type StoredItem<T> = {
  value: T;
};

export const useLocalStorage = (key: LocalStorageKey) => {
  const setStorageValue = (value: StoredItem<StorageValueMap>) => {
    console.log('Setting Value:', value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getStorageValue = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      console.log('Parsed Value:', parsedValue);
      return parsedValue;
    }
    return null;
  };

  return { setStorageValue, getStorageValue };
};
