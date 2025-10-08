import {
  useState,
  useMemo,
  useCallback,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import { flushSync } from 'react-dom';

import { DISTANCE_CONSTS, DISTANCE_TYPE } from '../utils/constants';

export type DistanceContextType = {
  isInitialLoading: boolean;
  kilometersOn: boolean;
  distanceType: DISTANCE_TYPE;
  toggleKilometers: () => void;
};

const DistanceContext = createContext<DistanceContextType | null>(null);

export function DistanceProvider({ children }: { children: ReactNode }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [kilometersOn, setKilometersOn] = useState(true);
  const [distanceType, setDistanceType] = useState<DISTANCE_TYPE>(
    DISTANCE_CONSTS.KILOMETERS
  );

  const toggleKilometers = useCallback(() => {
    setKilometersOn((prev) => !prev);
    setDistanceType((prev) =>
      prev === DISTANCE_CONSTS.KILOMETERS
        ? DISTANCE_CONSTS.MILES
        : DISTANCE_CONSTS.KILOMETERS
    );
  }, []);

  const value = useMemo(
    () => ({
      isInitialLoading,
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

export function useDistanceContext() {
  const context = useContext(DistanceContext);
  if (!context) {
    throw new Error('useDistance must be used within an DistanceProvider');
  }
  return context;
}
