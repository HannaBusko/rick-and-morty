import {ICharacter, IErrorObject}  from "../types/data.type";
interface FetchProps{
  url: string; 
  setLoading: (loading: boolean) => void;
  setData:(data: ICharacter[]&ICharacter) => void
  setError:(error: IErrorObject) => void;
}

const fetchThis = async ({url, setLoading, setData, setError }:FetchProps) => {
  setLoading(true);
  let response = await fetch(url);
  let res = await response.json();
  if (response.ok) {
    setLoading(false);
    setData(res?.results ? res.results : res);
  } else {
    setLoading(false);
    setError(res);
  }
};

export default fetchThis;
