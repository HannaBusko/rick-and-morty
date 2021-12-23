import { useState } from "react";
import { Card } from "semantic-ui-react";

import FigureCard from "./FigureCard";
import UploadData from "./UploadData";

import { SEARCH_PROPERTIES } from "../assets/service/constants";
interface ListCardsProps {
  searchQuery: string;
  genderArray: Array<string>;
}

const ListCards = ({ searchQuery, genderArray }: ListCardsProps) => {
  const [characters, setCharacters] = useState([]);

  const filtering =  (characters: Array<Object>)=>{
    let newArray = filterCharactersGender(characters);
    if(searchQuery){
      newArray = filterCharactersSearch(newArray);
    }
    return newArray;
  };

  const filterCharactersGender = (characters: Array<Object>) =>
    characters.filter((elem: any) => {
      return genderArray.includes("any") ||
        genderArray.includes(elem.gender?.toLowerCase())
        ? true
        : false;
    });

  const filterCharactersSearch = (characters: Array<Object>) =>
    characters.filter((elem: any) => {
      let suit = false;
       SEARCH_PROPERTIES.forEach((property) => {
         let character= property.additional ? elem[property.title][property.additional] : elem[property.title];
        if (character?.toLowerCase().includes(searchQuery?.toLowerCase()))
        {
          suit=true;
          return;
        }
      });
      return suit;
    });

  const addCard = (data: Array<Object>) =>
    data.map((character: any) => {
      return <FigureCard key={character.id} {...character} />
      
    });

  return (
    <Card.Group centered>
      <UploadData
        setDataFromAPI={setCharacters}
        additionalUrlPart="character/"
        id=""
      />
      {characters && genderArray.length ? (
        addCard(filtering(characters))
      ) : (
        <></>
      )}
    </Card.Group>
  );
};

export default ListCards;
