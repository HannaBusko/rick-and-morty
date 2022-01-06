import { useState } from "react";
import { useParams } from "react-router-dom";

import { Card, Image } from "semantic-ui-react";

import UploadData from "./general/UploadData";
import { URL_ADDITIONAL_CHARACTER } from "../assets/service/constants";

import { origin_name_label, location_name_label} from "../assets/service/locale";


import {ICharacterType} from "../assets/types/data.type";


const CardDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<ICharacterType>({});

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
          <Card.Description><p>{character.gender}</p>
          <p>{character.species}</p>
          {character.type &&<p>{character.type}</p>}
          <p><span>{origin_name_label}: </span>{character.origin?.name}</p>
          </Card.Description>
          <Card.Content extra><span>{location_name_label}: </span> {character.location?.name}</Card.Content>
        </Card.Content>
      </Card>
      }    
      </>
    );
 // }
};

export default CardDetails;
