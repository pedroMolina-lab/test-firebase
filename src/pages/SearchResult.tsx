import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useSearchResults} from "../hooks"

function SearchResults() {
  const params = useParams();
  const results = useSearchResults()

  return (

    <ul>
      {results.map((r) => (
        <li>
          <Link to={"/item" + r.id}>
            <h2>{r.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { SearchResults };
