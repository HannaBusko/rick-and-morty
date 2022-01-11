import { Card, Image } from "semantic-ui-react";
import {
  origin_name_label,
  location_name_label,
} from "../assets/service/locale";

import { ICharacter } from "../assets/types/data.type";

const SingleCard = ({data}:{data?:ICharacter}) => {
  return <>
    {data && (
      <Card fluid={false}>
        <Image src={data.image} wrapped ui={false} size="medium" />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>
            <span>{data.status}</span>
          </Card.Meta>
          <Card.Description>
            <p>{data.gender}</p>
            <p>{data.species}</p>
            {data.type && <p>{data.type}</p>}
            <p>
              <span>{origin_name_label}: </span>
              {data.origin?.name}
            </p>
          </Card.Description>
          <Card.Content extra>
            <span>{location_name_label}: </span> {data.location?.name}
          </Card.Content>
        </Card.Content>
      </Card>
    )}
  </>
};

export default SingleCard;
