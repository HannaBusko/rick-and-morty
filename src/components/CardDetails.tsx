import { useParams } from "react-router-dom";

import UploadData from "./general/UploadData";
import SingleCard from "./SingleCard";
import { URL_ADDITIONAL_CHARACTER } from "../assets/service/constants";

const CardDetails = () => {
  const { id } = useParams();
    return (

      <UploadData additionalUrlPart = {URL_ADDITIONAL_CHARACTER} id={id}>
        <SingleCard />
      </UploadData>

    );
 // }
};

export default CardDetails;
