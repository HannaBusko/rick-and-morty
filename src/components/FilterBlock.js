import { Grid, Input, Checkbox } from "semantic-ui-react";

const genderCheckbox = [
  {
    id: 0,
    label: "Any gender",
    value: "any"
  },
  {
    id: 1,
    label: "Male",
    value: "male"
  },
  {
    id: 2,
    label: "Female",
    value: "female"
  },
  {
    id: 3,
    label: "Genderless",
    value: "genderless"
  },
  {
    id: 4,
    label: "Unknown",
    value: "unknown"
  }];


const FilterBlock = ({searchQuery, searchItems, genderArray, changeGender }) => {

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
