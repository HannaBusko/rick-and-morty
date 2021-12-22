import { useState, useEffect } from "react";

  const useFetch = (url: string) => {

  const [status, setStatus] = useState<any>({
    loading: false,
    data: undefined,
    error: undefined
  });

  function fetchNow(url: string) {
    setStatus({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res?.results ? res.results : res });
      })
      .catch((error) => {
        setStatus({ loading: false, error });
      });
  }

  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, [url]);

  return { ...status, fetchNow };
}

export default useFetch
