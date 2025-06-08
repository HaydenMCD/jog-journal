import { useContext } from "react";
import DistanceContext from '../context/useDistanceContext';

const useDistanceValues = () => {
  const distanceValues = useContext(DistanceContext);
  return distanceValues;
};

export default useDistanceValues;