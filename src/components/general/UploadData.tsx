import Preloader from "./Preloader";
import useFetch from "../../assets/hooks/customFetch";

import { Message } from "semantic-ui-react";

import { URL_COMMON } from "../../assets/service/constants";
import { error_title } from "../../assets/service/locale";

import {ICharacterType}  from "../../assets/types/data.type";

interface UploadDataProps {
  setDataFromAPI: (data: ICharacterType[]&ICharacterType) => void;
  additionalUrlPart: string;
  id?: string ;
}

const UploadData = ({
  setDataFromAPI,
  additionalUrlPart,
  id = "",
}: UploadDataProps) => {

  const url = URL_COMMON + additionalUrlPart + id;

  const { data, loading, error} = useFetch(url);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <Message negative>
        <Message.Header>{error_title}</Message.Header>
        <p>{error.error}</p>
      </Message>
    );
  }

  if(data){
    setDataFromAPI(data);
  }
  return <></>;
};

export default UploadData;
