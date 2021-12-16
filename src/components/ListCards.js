import { useState } from "react";
import { Card } from "semantic-ui-react";

import FigureCard from "./FigureCard";
import UploadData from "./UploadData";

const ListCards = ({ searchQuery, genderArray }) => {
  const [characters, setCharacters] = useState([]);

  const filterCharactersArray = (characters) =>
    characters.filter((elem) => {
      return genderArray.includes("any") ||
        genderArray.includes(elem.gender?.toLowerCase())
        ? true
        : false;
    });

  const addCard = (data) =>
    data.map((character) => {
      return !searchQuery ||
        character.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ? (
        <FigureCard key={character.id} {...character} />
      ) : (
        <></>
      );
    });

  return (
    <Card.Group centered>
      <UploadData setDataFromAPI={setCharacters} additionalUrlPart ="character/"/>
      {characters && genderArray.length ? (
        addCard(filterCharactersArray(characters))
      ) : (
        <></>
      )}
    </Card.Group>
  );
};

export default ListCards;
