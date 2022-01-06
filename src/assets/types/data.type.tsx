interface IStatus {
    loading: boolean;
    data?: string;
    error?: IErrorObject;
  };
  
  interface IErrorObject {
    error?: string;
  };

  
interface ILocationType{
  name:	string;
  url:	string;
}

interface ICharacterError{
 error:string
}

type ICharacterType = ICharacterError&ICharacter;
  export interface ICharacter{
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:	string;
    origin:ILocationType;
    location:ILocationType;
    image:string;
    episode:string[];
    url:string;
    created:string;
}


  export type {IStatus, IErrorObject, ICharacterType} ;