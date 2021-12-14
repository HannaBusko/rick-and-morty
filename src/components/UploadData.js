import { useEffect, useState } from "react";

import Preloader from "./Preloader";
import ErrorMessage from "./ErrorMessage";

const UploadData = ({setDataFromAPI,id=""}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const urlCharacters = "https://rickandmortyapi.com/api/character/"+id;
  
    useEffect(() => {
      fetch(urlCharacters)
        .then((res) => res.json())
        .then(
          (data) => {
            setIsLoaded(true);
            setDataFromAPI( id ? data : data.results);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, [id, setDataFromAPI, urlCharacters]);
  
    if(!isLoaded){
        return <Preloader />;
    };

    if (error) {
      return <ErrorMessage message={error.message} />;
    };

    return <></>;
  };
  
  export default UploadData;
