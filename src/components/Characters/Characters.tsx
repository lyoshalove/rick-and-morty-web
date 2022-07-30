import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../hooks/useCharacters';

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  image: string;
}

export const Characters: React.FC = () => {
  const { data, loading, error } = useCharacters();

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1>Something went wrong...</h1>
      </div>
    );
  }
  
  return (
    <div className="container">
      <ul className="characters">
        {data.characters.results.map((character: ICharacter) => {
          return (
            <Link to={`/${character.id}`} key={character.id} className="characters__item">
              <img className="characters__item-img" src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
