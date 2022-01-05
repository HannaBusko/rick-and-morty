interface IStatus {
    loading: boolean;
    data?: undefined;
    error?: IErrorObject;
  };
  
  interface IErrorObject {
    error?: string;
  };

  export default IStatus;