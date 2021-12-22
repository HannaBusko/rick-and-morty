import Preloader from "./Preloader";
import useFetch from "../assets/hooks/customFetch";

import { Message } from "semantic-ui-react";

import { URL_COMMON } from "../assets/service/constants";
import { error_title } from "../assets/service/locale";


interface UploadDataProps {
  setDataFromAPI: any;
  additionalUrlPart: string;
  id: string | undefined;
}

const UploadData = ({
  setDataFromAPI,
  additionalUrlPart,
  id = "",
}: UploadDataProps) => {

  const url = URL_COMMON + additionalUrlPart + id;

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Preloader />;
  }

  if (error?.message) {
    return (
      <Message negative>
        <Message.Header>{error_title}</Message.Header>
        <p>{error.message}</p>
      </Message>
    );
  }

  if(data){
    setDataFromAPI(data);
  }
  return <></>;
};

export default UploadData;