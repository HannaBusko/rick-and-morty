import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const FigureCard = (character) => {
    const { image, id, name, status, gender } = character;
    const navigate = useNavigate();

    const navToCardDetails=()=>{
      navigate("/Character/"+id);
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

  export default FigureCard;