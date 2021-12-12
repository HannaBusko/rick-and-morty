import React, { useEffect, useState } from "react";
import { Message, Card, Image } from "semantic-ui-react";
import Preloader from "./Preloader";

const ErrorMessage = (message) => (
  <Message negative>
    <Message.Header>Sorry</Message.Header>
    <p>{message}</p>
  </Message>
);

const FigureCard = (character) => {
  const { image, name, status, gender } = character;
  return (
    <Card fluid={false}>
      <Image src={image} wrapped ui={false} size="medium" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{status}</span>
        </Card.Meta>
        <Card.Description>{gender}</Card.Description>
      </Card.Content>
    </Card>
  );
};
/*characters.map((character) => {
          if (
            (!searchQuery && genderArray.some((elem) => elem.toLowerCase() === "any")) ||
            character.name
              ?.toLowerCase()
              .includes(searchQuery?.toLowerCase())
          ) {
            return <FigureCard key={character.id} {...character} />;
          } else {
            return <></>;
          }
        })*/
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
