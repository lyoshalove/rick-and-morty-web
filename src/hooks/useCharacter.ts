import { useQuery } from "@apollo/client"
import { GET_CHARACTER } from "../query/getCharacter"

export const useCharacter = (id: number) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });

  return { data, loading, error };
}