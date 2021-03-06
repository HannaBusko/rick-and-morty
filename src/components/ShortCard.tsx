import { useNavigate } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

import { URL_NAVIGATE_CHARACTER } from "../assets/service/constants";

import {ICharacter}  from "../assets/types/data.type";

const ShortCard = ({ image, id, name, status, gender }: ICharacter) => {
  const navigate = useNavigate();

  const navToCardDetails = () => {
    navigate(URL_NAVIGATE_CHARACTER + id);
  };

  return (
    <Card fluid={false} onClick={navToCardDetails}>
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

export default ShortCard;
