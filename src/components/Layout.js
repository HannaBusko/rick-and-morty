import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "./Preloader";
import HeaderWithLogo from "./Header";
import ListCards from "./ListCards";
import FilterBlock from "./FilterBlock";
import CardDetails from "./CardDetails";

import { Grid } from "semantic-ui-react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderArray, setSelectedGender] = useState(["any"]);

  const searchItems = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const selectGender = (selectedGender) => {
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
        <ListCards searchQuery={searchQuery} genderArray={genderArray} />
      </Grid.Column>
    </Grid>
  );
};

const Layout = () => {
  return (
    <>
      <HeaderWithLogo breadcrumbSection="Characters" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Character" element={<Preloader />} />
      </Routes>
    </>
  );
};

export default Layout;
