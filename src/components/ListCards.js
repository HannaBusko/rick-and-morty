import React, { useEffect, useState } from "react";
import {Card } from "semantic-ui-react";
import Preloader from "./Preloader";
import ErrorMessage from "./ServiceComponents";
import FigureCard from "./FigureCard";


const ListCards = (props) => {
  const { searchQuery, genderArray } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);
  const urlCharacters = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(urlCharacters)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCharacters(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <ErrorMessage message={error.message} />;
  } else if (!isLoaded) {
    return <Preloader />;
  } else {
    return (
      <Card.Group centered>
        {genderArray.length ? (
          characters.filter((elem) => {
            if(genderArray.includes("any") || genderArray.includes(elem.gender?.toLowerCase())){
              return true;
            }   
            return false;
          }).map((character) => {
            if (!searchQuery ||
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
  }
};

export default ListCards;
