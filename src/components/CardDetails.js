import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "./Preloader";
import ErrorMessage from "./ServiceComponents";
import { Card, Image } from "semantic-ui-react";

const CardDetails = () => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState({});
  const urlCharacter = "https://rickandmortyapi.com/api/character/" + id;

  useEffect(() => {
    fetch(urlCharacter)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCharacters(data);
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
      <Card fluid={false}>
        <Image src={characters.image} wrapped ui={false} size="medium" />
        <Card.Content>
          <Card.Header>{characters.name}</Card.Header>
          <Card.Meta>
            <span>{characters.status}</span>
          </Card.Meta>
          <Card.Description>{characters.gender}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
};

export default CardDetails;
