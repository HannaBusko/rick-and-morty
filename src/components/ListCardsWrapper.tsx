import ListOfCardsWithFiltering from "./ListOfCardsWithFiltering";
import UploadData from "./general/UploadData";

interface ListCardsProps {
  searchQuery: string;
  genderArray: Array<string>;
}

const ListCardsWrapper = ({ searchQuery, genderArray }: ListCardsProps) => {

  return (
    <UploadData additionalUrlPart="character/" id="">
      <ListOfCardsWithFiltering searchQuery={searchQuery} genderArray={genderArray}/>
    </UploadData>
  );
};

export default ListCardsWrapper;
