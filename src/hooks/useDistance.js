import {
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

import { DISTANCE_TYPES } from '../utils/constants';

export const DistanceContext = createContext({
    kilometersOn: true,
    distanceType: DISTANCE_TYPES.KILOMETERS.NAME,
    toggleKilometers: () => {},
});

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
    [kilometersOn, toggleKilometers, distanceType]
  );

  return (
    <DistanceContext.Provider
      distanceType={value.distanceType}
      kilometersOn={value.kilometersOn}
      toggleKilometers={value.toggleKilometers}>
      {children}
    </DistanceContext.Provider>
  );
}

export const useDistanceValues = () => {
  return useContext(DistanceContext);
};
