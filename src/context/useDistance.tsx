import {
  useState,
  useMemo,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import { DISTANCE_TYPES } from '../utils/constants';

export type DistanceContextType = {
  isInitialLoading: boolean;
};

export function DistanceProvider({ children }: { children: ReactNode }) {
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
    <DistanceContext.Provider value={{ ...value }}>
      {children}
    </DistanceContext.Provider>
  );
}

const DistanceContext = createContext({
  kilometersOn: true,
  distanceType: DISTANCE_TYPES.KILOMETERS.NAME,
  toggleKilometers: () => {},
});

export function useDistanceContext() {
  const context = useContext(DistanceContext);
  if (!context) {
    throw new Error('useDistance must be used within an DistanceProvider');
  }
  return context;
}
