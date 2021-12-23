import { useEffect, useState } from "react";

import fetchThis from "../service/rest";

const useFetch = (url: string) => {

    const [status, setStatus] = useState<any>({
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
