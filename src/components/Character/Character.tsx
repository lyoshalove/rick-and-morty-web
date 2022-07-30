import React from "react";

interface IProps {
  characterInfo: {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: Date;
  }
}

export const Character: React.FC<IProps> = ({ characterInfo }) => {
  return (
    <section className="character">
      <div className="container">
        <div className="character__inner">
          <div className="character__image">
            <img src={characterInfo.image} alt={characterInfo.name} />
          </div>
          <div className="character__info">
            <h2 className="character__title">{characterInfo.name}</h2>
            <p>
              <strong>Status:</strong> {characterInfo.status}
            </p>
            <p>
              <strong>Species:</strong> {characterInfo.species}
            </p>
            <p>
              <strong>Gender:</strong> {characterInfo.gender}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};