import { useState } from "react";
import { Card } from "semantic-ui-react";

import FigureCard from "./FigureCard";
import UploadData from "./UploadData";

interface ListCardsProps {
  searchQuery: string;
  genderArray: Array<string>;
}

const ListCards = ({ searchQuery, genderArray }:ListCardsProps) => {
  const [characters, setCharacters] = useState([]);

  const filterCharactersArray = (characters:Array<Object>) =>
    characters.filter((elem:any) => {
      return genderArray.includes("any") ||
        genderArray.includes(elem.gender?.toLowerCase())
        ? true
        : false;
    });

  const addCard = (data:Array<Object>) =>
    data.map((character:any) => {
      return !searchQuery ||
        character.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ? (
        <FigureCard key={character.id} {...character} />
      ) : (
        <></>
      );
    });

  return (
    <Card.Group centered>
      <UploadData setDataFromAPI={setCharacters} additionalUrlPart ="character/" id=""/>
      {characters && genderArray.length ? (
        addCard(filterCharactersArray(characters))
      ) : (
        <></>
      )}
    </Card.Group>
  );
};

export default ListCards;
