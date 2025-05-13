import { useContext } from "react";
import DistanceContext from './useDistanceContext';

const useDistanceValues = () => {
  const distanceValues = useContext(DistanceContext);
  return distanceValues;
};

export default useDistanceValues;