import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage.tsx";
import HeaderWithLogo from "./Header";
import CardDetails from "./CardDetails";


const Layout = () => {
  return (
    <>
      <HeaderWithLogo breadcrumbSection="Characters" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Character/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};

export default Layout;
