import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import HeaderWithLogo from "./Header";
import CardDetails from "./CardDetails";

import { main_page_breadcrumb } from "../assets/service/locale";

const Layout = () => {
  return (
    <>
      <HeaderWithLogo breadcrumbSection={main_page_breadcrumb} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Character/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
};

export default Layout;
