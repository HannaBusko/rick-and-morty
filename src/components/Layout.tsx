import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import HeaderWithLogo from "./Header";
import CardDetails from "./CardDetails";


const Layout = () => {
  return (
    <>
      <HeaderWithLogo breadcrumbSection="Characters" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Character/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};

export default Layout;
