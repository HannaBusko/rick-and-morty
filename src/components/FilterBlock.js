import React from "react";

import { Grid, Input, Checkbox } from "semantic-ui-react";

const FilterBlock = (props) => {
  const { searchQuery, searchItems, genderArray, changeGender } = props;

 /* const isCheckedValue = (value) =>
    genderArray.some((elem) => elem.toLowerCase() === value);*/

  const changeCheckbox = (e, target) => {
    const newGenderArray = target.checked
      ? [...genderArray].concat([target.value])
      : [...genderArray].filter((elem) => elem.toLowerCase() !== target.value);
    changeGender(newGenderArray);
  };

  return (
    <Grid>
      <Grid.Row centered>
        <Input
          icon="search"
          onChange={(e) => searchItems(e.target.value)}
          value={searchQuery}
          placeholder="Character's name"
        />
      </Grid.Row>
      <Grid.Row centered>
        <div className="checkbox-list">
          <label>Gender</label>
          <Checkbox
            className="checkbox-item"
            label="Any gender"
            value={"any"}
            checked={genderArray.includes("any")}
            onChange={changeCheckbox}
          />
          <Checkbox
            className="checkbox-item"
            label="Male"
            value={"male"}
            checked={genderArray.includes("male")}
            onChange={changeCheckbox}
          />
          <Checkbox
            className="checkbox-item"
            label="Female"
            value={"female"}
            checked={genderArray.includes("female")}
            onChange={changeCheckbox}
          />
          <Checkbox
            className="checkbox-item"
            label="Genderless"
            value={"genderless"}
            checked={genderArray.includes("genderless")}
            onChange={changeCheckbox}
          />
          <Checkbox
            className="checkbox-item"
            label="Unknown"
            value={"unknown"}
            checked={genderArray.includes("unknown")}
            onChange={changeCheckbox}
          />
        </div>
      </Grid.Row>
    </Grid>
  );
};

export default FilterBlock;
