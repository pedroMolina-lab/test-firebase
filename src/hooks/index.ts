import React from "react";
import { useState, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import { useParams } from "react-router-dom";

const queryState = atom({
  key: "query",
  default: "",
});

const resultState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse.results;
    }else{
      return []
    }
    console.log({ valorDeQuery });
  },
});

export function useSearchResults() {
  const params = useParams();
  
  const [value, setQueryValue] = useRecoilState(queryState);

  const query = params.query;
  const results = useRecoilValue(resultState);


  useEffect(() => {
    if (query) {
      setQueryValue(query);
    }
  }, [query]);

  return results;
}
