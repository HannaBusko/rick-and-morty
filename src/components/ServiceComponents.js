
import React from "react";
import { Message } from "semantic-ui-react";

const ErrorMessage = (message) => (
    <Message negative>
      <Message.Header>Sorry</Message.Header>
      <p>{message}</p>
    </Message>
  );

  export default ErrorMessage;