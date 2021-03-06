import { Children, cloneElement } from "react";

import Preloader from "./Preloader";
import useFetch from "../../assets/hooks/customFetch";

import { Message } from "semantic-ui-react";

import { URL_COMMON } from "../../assets/service/constants";
import { error_title } from "../../assets/service/locale";

interface UploadDataProps {
  children: JSX.Element;
  additionalUrlPart: string;
  id?: string;
}

const UploadData = ({
  children,
  additionalUrlPart,
  id = "",
}: UploadDataProps) => {
  const url = URL_COMMON + additionalUrlPart + id;

  const { data, loading, error } = useFetch(url);

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

  const childrenWithExtraProp = Children.map(children, (child) => {
    return cloneElement(child, { data: data });
  });
  return <>{childrenWithExtraProp}</>;
};

export default UploadData;
