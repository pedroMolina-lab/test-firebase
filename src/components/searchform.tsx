import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useSearchResults} from "../hooks"


function SearchForm() {
  const navigate = useNavigate();
  const results = useSearchResults()
    
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate("/search/" + query);
    console.log("soy el component",query);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <button>buscar</button>
      <h4>resultados:{results.length}</h4>
    </form>
  );
}
export { SearchForm };
