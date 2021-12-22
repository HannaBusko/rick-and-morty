

  const fetchThis = (url: string, setStatus:any) =>{
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


  export default fetchThis;