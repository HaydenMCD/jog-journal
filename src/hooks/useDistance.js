import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { DISTANCE_TYPES } from '../utils/constants';

const DistanceContext = createContext(null);

export function DistanceProvider({ children }) {
  const [kilometersOn, setKilometersOn] = useState(true);
  const [distanceType, setDistanceType] = useState(
    DISTANCE_TYPES.KILOMETERS.NAME
  );

  const toggleKilometers = useCallback(() => {
    setKilometersOn((prev) => !prev);
    setDistanceType((prev) =>
      prev === DISTANCE_TYPES.KILOMETERS.NAME
        ? DISTANCE_TYPES.MILES.NAME
        : DISTANCE_TYPES.KILOMETERS.NAME
    );
  }, []);

  const value = useMemo(
    () => ({
      kilometersOn,
      distanceType,
      toggleKilometers,
    }),
    [kilometersOn, toggleKilometers]
  );

  return (
    <DistanceContext.Provider distance={value}>
      {children}
    </DistanceContext.Provider>
  );
}

export const useDistance = () => {
  const distance = useContext(DistanceContext);
  if (!context) {
    throw new Error('useDistance must be used within a DistanceProvider');
  }
  return distance;
};
