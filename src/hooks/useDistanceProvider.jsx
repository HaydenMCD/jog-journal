import { useState, useMemo, useCallback } from 'react';

import { DISTANCE_TYPES } from '../utils/constants';
import DistanceContext from './useDistanceContext';

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
    <DistanceContext.Provider value={value}>
      {children}
    </DistanceContext.Provider>
  );
}
