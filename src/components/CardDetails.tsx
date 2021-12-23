import { useState } from "react";
import { useParams } from "react-router-dom";

import { Card, Image } from "semantic-ui-react";

import UploadData from "./UploadData";
import { URL_ADDITIONAL_CHARACTER } from "../assets/service/constants";

interface CharacterType {
  [key: string]: any
};

const CardDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterType>({});

    return (
      <>
      <UploadData setDataFromAPI={setCharacter} additionalUrlPart = {URL_ADDITIONAL_CHARACTER} id={id}/>
      { Object.keys(character).length !== 0 && !character.error &&  <Card fluid={false}>
        <Image src={character.image} wrapped ui={false} size="medium" />
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Meta>
            <span>{character.status}</span>
          </Card.Meta>
          <Card.Description>{character.gender}</Card.Description>
        </Card.Content>
      </Card>
      }    
      </>
    );
 // }
};

export default CardDetails;
