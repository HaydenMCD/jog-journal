import { createContext } from "react";

import { DISTANCE_TYPES } from '../utils/constants';

const DistanceContext = createContext({
    kilometersOn: true,
    distanceType: DISTANCE_TYPES.KILOMETERS.NAME,
    toggleKilometers: () => {},
});

export default DistanceContext;