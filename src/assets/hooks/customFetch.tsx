import { useEffect, useState } from "react";

import fetchThis from "../service/rest";
import {ICharacter, IErrorObject} from "../types/data.type";

const useFetch = (url: string) => {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<ICharacter[]&ICharacter>();

    const [error, setError] = useState<IErrorObject>();
 
  useEffect(() => {
    if (url) {
      fetchThis({url, setLoading, setData, setError });
    }
  }, [url]);

  return {loading, data, error };
}

export default useFetch;
