import { useEffect, useState } from "react";

import Preloader from "./Preloader";
import { Message } from "semantic-ui-react";

import { URL_COMMON } from "./constants";

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
  const [error, setError] = useState({ message: null });
  const [isLoaded, setIsLoaded] = useState(false);
  const url = URL_COMMON + additionalUrlPart + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setDataFromAPI(id ? data : data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id, setDataFromAPI, url]);

  if (!isLoaded) {
    return <Preloader />;
  }

  if (error?.message) {
    return (
      <Message negative>
        <Message.Header>Sorry</Message.Header>
        <p>{error.message}</p>
      </Message>
    );
  }
  return <></>;
};

export default UploadData;
