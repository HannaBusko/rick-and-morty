import { useEffect, useState } from "react";

import fetchThis from "../service/rest";
import IStatus from "../types/data.type";

const useFetch = (url: string) => {

    const [status, setStatus] = useState<IStatus>({
      loading: false,
      data: undefined,
      error: undefined    
    });
 
  useEffect(() => {
    if (url) {
      fetchThis({url, setStatus});
    }
  }, [url]);

  return { ...status};
}

export default useFetch;
