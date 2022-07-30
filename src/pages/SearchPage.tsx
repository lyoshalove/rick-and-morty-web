import React, { useState } from "react";
import { useLocations } from "../hooks/useLocations";

interface Character {
  id: string;
  name: string;
  location: Location;
}

interface Location {
  id: string;
  name: string;
}

export const SearchPage: React.FC = () => {
  const [ searchValue, setSearchValue ] = useState<string>('');
  const { getLocations, data, loading, error } = useLocations(searchValue);

  return (
    <section className="search">
      <div className="container">
        <div className="search__inner">
          <h2 className="search__title center">Search characters locations</h2>
          <form
            action="#"
            className="search__form"
            onSubmit={(e) => {
              e.preventDefault();
              getLocations();
            }}
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>search</button>
          </form>
          {loading && <h2>Loading...</h2>}
          {error && <h2>Something went wrong..</h2>}
          {data && (
            <ul className="characters__menu">
              {data.characters.results.map((character: Character) => {
                return (
                  <li
                    key={character.id}
                    className="characters__menu-item"
                    style={{ margin: "25px 0" }}
                  >
                    <h2>{character.name}</h2>
                    <ul className="locations">
                      <li className="locations__item">
                        {character.location.name}
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};