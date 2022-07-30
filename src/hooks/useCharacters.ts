import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../query/getAllCharacters";

export function useCharacters()  {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  return { data, loading, error };
};