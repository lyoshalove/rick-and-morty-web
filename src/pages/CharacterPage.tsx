import React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../components/Character/Character";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(Number(id));

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
    <Character characterInfo={data.character} />
  )
};