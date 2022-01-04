import { useEffect, useState } from "react";

import fetchThis from "../service/rest";

interface IErrorObject {
  error?: string;
};

interface IStatus {
  loading: boolean;
  data?: Object;
  error?: IErrorObject;
};

const useFetch = (url: string) => {

    const [status, setStatus] = useState<IStatus>({
      loading: false,
      data: undefined,
      error: undefined    
    });
 
  useEffect(() => {
    if (url) {
      fetchThis(url, setStatus);
    }
  }, [url]);

  return { ...status};
}

export default useFetch;
