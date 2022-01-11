import { SetStateAction, useState } from "react";
import ListCardsWrapper from "./ListCardsWrapper";
import FilterBlock from "./FilterBlock";

import { Grid } from "semantic-ui-react";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [genderArray, setSelectedGender] = useState(["any"]);
  
    const searchItems = (searchValue: SetStateAction<string>) => {
      setSearchQuery(searchValue);
    };
  
    const selectGender = (selectedGender: SetStateAction<string[]>) => {
      setSelectedGender(selectedGender);
    };
  
    return (
      <Grid stackable columns={2} className="container-main">
        <Grid.Column width={4}>
          <FilterBlock
            searchQuery={searchQuery}
            searchItems={searchItems}
            genderArray={genderArray}
            changeGender={selectGender}
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <ListCardsWrapper searchQuery={searchQuery} genderArray={genderArray} />
        </Grid.Column>
      </Grid>
    );
  };

  export default HomePage;