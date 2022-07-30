import { gql } from "@apollo/client";

export const GET_ALL_LOCATIONS = gql`
  query getCharactersLocations($name: String!) {
    characters(filter: {name: $name}) {
      results {
        id, name
        location {
          id, name
        }
      }
    }
  }
`;