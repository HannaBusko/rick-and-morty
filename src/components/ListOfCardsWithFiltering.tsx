import { Card } from "semantic-ui-react";

import ShortCard from "./ShortCard";

import { SEARCH_PROPERTIES } from "../assets/service/constants";

import { ICharacter } from "../assets/types/data.type";

interface ListCardsWithFilteringProps {
  searchQuery: string;
  genderArray: Array<string>;
  data?:ICharacter[]
}

const ListOfCardsWithFiltering = ({searchQuery, genderArray, data }:ListCardsWithFilteringProps) => {

    const filtering = (data: ICharacter[]) => {
        let newArray = filterCharactersGender(data);
        if (searchQuery) {
          newArray = filterCharactersSearch(newArray);
        }
        return newArray;
      };
    
      const filterCharactersGender = (data: ICharacter[]) =>
        data.filter((elem: any) => {
          return (
            genderArray.includes("any") ||
            genderArray.includes(elem.gender?.toLowerCase())
          );
        });
    
      const filterCharactersSearch = (data: ICharacter[]) =>
        data.filter((elem: any) => {
          let suit = false;
          SEARCH_PROPERTIES.forEach((property) => {
            let character = property.additional
              ? elem[property.title][property.additional]
              : elem[property.title];
            if (character?.toLowerCase().includes(searchQuery?.toLowerCase())) {
              suit = true;
              return;
            }
          });
          return suit;
        });


  return <Card.Group centered>
    {data && 
      filtering(data).map((character: ICharacter) => (
        <ShortCard key={character.id} {...character} />
      ))}
  </Card.Group>;
  }
;

export default ListOfCardsWithFiltering;
