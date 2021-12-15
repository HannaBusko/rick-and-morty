import { useState } from "react";
import { Card } from "semantic-ui-react";

import FigureCard from "./FigureCard";
import UploadData from "./UploadData";

const ListCards = ({searchQuery, genderArray }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <Card.Group centered>
      <UploadData setDataFromAPI={setCharacters} />
      {characters && genderArray.length ? (
        characters
          .filter((elem) => {
            if (
              genderArray.includes("any") ||
              genderArray.includes(elem.gender?.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((character) => {
            if (
              !searchQuery ||
              character.name?.toLowerCase().includes(searchQuery?.toLowerCase())
            ) {
              return <FigureCard key={character.id} {...character} />;
            } else {
              return <></>;
            }
          })
      ) : (
        <></>
      )}
    </Card.Group>
  );
};
//};

export default ListCards;
