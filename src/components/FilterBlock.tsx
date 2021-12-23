import { Grid, Input, Checkbox, CheckboxProps } from "semantic-ui-react";

import { search_input_placeholder, gender_checkbox_label } from "../assets/service/locale";

import { GENDER_CHECKBOX } from "../assets/service/constants";

  interface FilterProps {
    searchQuery: string;
    searchItems: (arg0: string) => void;
    genderArray: Array<any>;
    changeGender: (arg0: Array<string>) => void;
  };

const FilterBlock = ({searchQuery, searchItems, genderArray, changeGender }:FilterProps) => {

  const changeCheckbox = (e: any, target: { checked: boolean; value: string}|CheckboxProps) => {

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
          placeholder={search_input_placeholder}
        />
      </Grid.Row>
      <Grid.Row centered>
        <div className="checkbox-list">
          <label>{gender_checkbox_label}</label>
          {
            GENDER_CHECKBOX.map((data)=> <Checkbox
            key={data.id}
            className="checkbox-item"
            label={data.label}
            value={data.value}
            checked={genderArray.includes(data.value)}
            onChange={changeCheckbox}
          />)
          }
        </div>
      </Grid.Row>
    </Grid>
  );
};

export default FilterBlock;
