import { Message } from "semantic-ui-react";

const ErrorMessage = (message: boolean | object| string | null | undefined) => (
    <Message negative>
      <Message.Header>Sorry</Message.Header>
      <p>{message}</p>
    </Message>
  );

  export default ErrorMessage;