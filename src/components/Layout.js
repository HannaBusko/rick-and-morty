import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Preloader from "./Preloader";
import HeaderWithLogo from "./Header";
import ListCards from "./ListCards";
import FilterBlock from "./FilterBlock";

import { Grid } from "semantic-ui-react";

const RoutesWrapper = () => (
  <Routes>
    <Route exact path="/" element={<Preloader />} />
    <Route path="*" element={<Navigate to="/products" />} />
  </Routes>
);

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderArray, setSelectedGender] = useState(["any"]);

  const searchItems = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const selectGender = (selectedGender) => {
    setSelectedGender(selectedGender);
  };

  return(
  <>
    <HeaderWithLogo breadcrumbSection="Characters" />
    <Grid stackable columns={2} className="container-main">
      <Grid.Column width={4} >
        <FilterBlock searchQuery={searchQuery} searchItems={searchItems} genderArray={genderArray} changeGender={selectGender}/>
      </Grid.Column>
      <Grid.Column width={12}>
        <ListCards searchQuery={searchQuery} genderArray={genderArray}/>
      </Grid.Column>
    </Grid>
  </>
)};

export default Layout;
