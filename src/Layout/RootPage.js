import React from "react";
import MainNavigation from "../Header/MainNavigation";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
