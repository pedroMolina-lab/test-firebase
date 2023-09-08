import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchForm } from "./searchform";
import { usernameState } from "../atoms";
import { useRecoilValue } from "recoil";

function Layout() {
  const id = useRecoilValue(usernameState);

  return (
    <div>
      <header style={{ border: "solid 1px" }}>Header. Data: {id}</header>
      <SearchForm />
      <Outlet></Outlet>
    </div>
  );
}
export { Layout };
