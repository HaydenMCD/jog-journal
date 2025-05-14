import { useState } from 'react';

type LocalStorageKey = 'distanceType' | 'theme';

type StorageValueMap = {
  distanceType: 'Kilometers' | 'Miles';
  theme: 'light' | 'dark';
};

type StoredItem<T> = {
  value: T;
};

export const useLocalStorage = (key: LocalStorageKey) => {
  const setValue = (value: StoredItem<StorageValueMap>) => {
    const storedValue = localStorage.getItem(key);
    console.log(key);
  };

  return { setValue };
};
