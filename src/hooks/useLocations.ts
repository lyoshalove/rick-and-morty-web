import { useLazyQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS } from "../query/getAllLocations";

export const useLocations = (name: string) => {
  const [getLocations, {data, loading, error}] = useLazyQuery(GET_ALL_LOCATIONS, {
    variables: {
      name
    }
  });

  return { getLocations, data, loading, error };
};