import { Grid, Input, Checkbox } from "semantic-ui-react";

const genderCheckbox = [
  {
    label: "Any gender",
    value: "any"
  },
  {
    label: "Male",
    value: "male"
  },
  {
    label: "Female",
    value: "female"
  },
  {
    label: "Genderless",
    value: "genderless"
  },
  {
    label: "Unknown",
    value: "unknown"
  }];


const FilterBlock = (props) => {
  const { searchQuery, searchItems, genderArray, changeGender } = props;

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
          {
            genderCheckbox.map((data)=> <Checkbox
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
