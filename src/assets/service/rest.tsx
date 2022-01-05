import IStatus from "../types/data.type";

const fetchThis = async (url: string, setStatus: (data: IStatus) => void) => {
  setStatus({ loading: true });
  let response = await fetch(url);
  let res = await response.json();
  if (response.ok) {
    setStatus({ loading: false, data: res?.results ? res.results : res });
  } else {
    setStatus({ loading: false, error: res });
  }
};

export default fetchThis;
